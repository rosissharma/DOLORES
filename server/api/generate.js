import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default defineEventHandler(async (event) => {
    if (!configuration.apiKey) {
        return {
            status: 500,
            body: {
                error: {
                    message: 'OpenAI API key not configured, please follow instructions in README.md'
                }
            }
        }
    }

    const body = await readBody(event)
    const animal = body.animal || ''
    if (animal.trim().length === 0) {
        return {
            status: 400,
            body: {
                error: {
                    message: 'Please enter a valid animal'
                }
            }
        }
    }

    try {
        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: generatePrompt(animal),
            temperature: 0.6
        })
        return {
            status: 200,
            body: { result: completion.data.choices[0].text }
        }
    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
            console.error(error.response.status, error.response.data)
            return {
                status: error.response.status,
                body: error.response.data
            }
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`)
            return {
                status: 500,
                body: {
                    error: {
                        message: 'An error occurred during your request.'
                    }
                }
            }
        }
    }
})

function generatePrompt(animal) {
    const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase()
    return `Suggest three names for an animal that is a superhero.
  
  Animal: Cat
  Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
  Animal: Dog
  Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
  Animal: ${capitalizedAnimal}
  Names:`
}
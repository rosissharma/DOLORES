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
    const topic = body.topic || ''
    if (topic.trim().length === 0) {
        return {
            status: 400,
            body: {
                error: {
                    message: 'Please enter a valid topic'
                }
            }
        }
    }

    try {
        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: generatePrompt(topic),
            temperature: 0,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
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

function generatePrompt(topic) {
    return `Generate a color palette with 5 values. Only return the hex value, nothing more. Here is a expected sample output:#7664E9, #A1D631, #D13939, #94623D, #4680AB. Base it on this context: ${topic}`
}
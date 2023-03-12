// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // Env vars
    runtimeConfig: {
        // The private keys which are only available server-side
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,

        // Keys within public are also exposed client-side
        public: { LOG_SNAG_KEY: process.env.LOG_SNAG_KEY, }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: 'DOLORES',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'DOLORES is an innovative AI color generative assistant that harnesses the power of OpenAI to create stunning color palettes for your projects. With DOLORES, you can easily generate unique and harmonious color schemes for your designs, logos, and branding materials. Experience the convenience and creativity of AI-assisted color generation with DOLORES today.' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
    },
})

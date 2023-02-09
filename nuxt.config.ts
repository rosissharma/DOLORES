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
})

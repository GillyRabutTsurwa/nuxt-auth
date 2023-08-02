// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        github: {
            client_ID: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
    modules: ["@sidebase/nuxt-auth"],
    devtools: { enabled: true },
});

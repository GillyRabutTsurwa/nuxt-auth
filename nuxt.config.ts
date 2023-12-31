// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@sidebase/nuxt-auth", "@nuxtjs/tailwindcss"],
    css: ["~/assets/css/main.css"],
    runtimeConfig: {
        github: {
            client_ID: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
        },
        google: {
            client_ID: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
        },
        auth: {
            secret: process.env.AUTH_SECRET,
        },
        mongodb: {
            uri: process.env.MONGODB_URI,
        },
    },
    tailwindcss: {
        cssPath: "~/assets/css/main.css",
        config: {
            postcss: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    devtools: { enabled: true },
});

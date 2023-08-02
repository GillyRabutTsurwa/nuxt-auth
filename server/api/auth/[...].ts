// file: ~/server/api/auth/[...].ts - NOTE: code copied directly from documentation: https://sidebase.io/nuxt-auth/getting-started/quick-start
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: config.github.client_ID,
            clientSecret: config.github.client_secret,
        }),
    ],
    pages: {
        /**
         * NOTE: change the default behaviour to use the login page as the sign-in page
         * this seems to work if we specify the provider type (as a string) as an argument in the signIn()
         * look at the GithubLogin component to look at this function, which comes with nuxt-auth
         * if we take away the argument, i'm not sure that we need this
         */
        signIn: "/login",
    },
});

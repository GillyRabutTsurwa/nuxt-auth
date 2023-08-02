// file: ~/server/api/auth/[...].ts - NOTE: code copied directly from documentation: https://sidebase.io/nuxt-auth/getting-started/quick-start
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
    secret: config.auth.secret,
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
            clientId: config.github.client_ID,
            clientSecret: config.github.client_secret,
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: "credentials",
            authorize(credentials: any) {
                /**
                 * IMPORTANTNOTE:
                 * cody says this isn't suitable for production because we are not fetching user data via a database
                 * this user object below would be generated from a database
                 * and it would be compared to the credentials coming from the form to see if there's a match
                 */
                const user = {
                    email: "tsurwagilbert@gmail.com",
                    password: "password",
                };

                // NOTE: if the form data matches with a user data that exists (likely in a database), authenticated the user via return
                if (credentials?.email === user.email && credentials.password === user.password) return user;
            },
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

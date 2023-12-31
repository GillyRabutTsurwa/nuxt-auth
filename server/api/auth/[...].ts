// file: ~/server/api/auth/[...].ts - NOTE: code copied directly from documentation: https://sidebase.io/nuxt-auth/getting-started/quick-start
import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/users";

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
        GoogleProvider.default({
            clientId: config.google.client_ID,
            clientSecret: config.google.client_secret,
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: "credentials",
            authorize: async (credentials: any) => {
                console.log("Credentials", credentials);
                const users = await User.find();
                console.log("Users", users);
                /**
                 * NOTE: if the form data matches with a user data that exists (likely in a database), authenticated the user via return
                 * the mongo query below is does the same thing as
                 * if (credentials?.email === user.email && credentials.password === user.password) return user;
                 * only thing is, we are comparing the form data to an existing user in the database, as this should be protocol
                 */
                const user = await User.findOne({ email: credentials?.email, password: credentials.password });
                return user;
            },
        }),
    ],
    callbacks: {
        session: async ({ session }) => {
            console.log("Session", session);
            return session;
        },
        // NOTE: useful, but i have no use for this right now
        // this would be good for adding oauth providers to the database
        // signIn: async ({ profile }) => {
        //     console.log(profile);
        //     try {
        //         await databaseConnect();
        //         const userExist = await User.findOne({ email: profile?.email });
        //         if (!userExist) {
        //             await User.create({
        //                 email: profile?.email,
        //             });
        //         }
        //         console.log(profile);
        //         return true;
        //     } catch (error) {
        //         console.error(error);
        //         return false;
        //     }
        // },
    },
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

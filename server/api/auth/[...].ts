// file: ~/server/api/auth/[...].ts - NOTE: code copied directly from documentation: https://sidebase.io/nuxt-auth/getting-started/quick-start
import { NuxtAuthHandler } from "#auth";
import { databaseConnect } from "../../database/mongo";
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
            async authorize(credentials: any) {
                console.log(credentials);
                await databaseConnect();
                const users = await User.find();
                console.log("Users", users);
                const user = await User.findOne({ email: credentials?.email, password: credentials.password });
                // NOTE: if the form data matches with a user data that exists (likely in a database), authenticated the user via return
                // if (credentials?.email === user.email && credentials.password === user.password) return user;
                return user;
                // NOTE: all above code works
            },
        }),
    ],
    callbacks: {
        session: async ({ session }) => {
            // console.log(session);
            return session;
        },
        // signIn: async ({ profile }) => {
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

import type { H3Event } from "h3";
import User from "../../../models/users";

export default defineEventHandler(async (event: H3Event) => {
    const body = await readBody(event);
    console.log(body);
    /**
     * NOTE: this takes the credentials from the RegisterForm
     * and creates a new user, and adds it to the database
     */
    const newUser = new User({
        email: body.email,
        password: body.password,
    });
    try {
        await User.create(newUser);
        console.log("New User Created", newUser);
        //IMPORTANTNOTE:
        /**
         * okey. i get it. we can use the return value in the client side
         * so when i do
         * const { data } = useFetch("api/endpoint", {
         * method: "POST",
         * .... more code
         * });
         * the return value here is what data is in the client side
         */
        return newUser;
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Attempt to create new user completed");
    }
});

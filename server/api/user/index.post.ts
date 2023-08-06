import type { H3Event } from "h3";
import User from "../../../models/users";
import { databaseConnect } from "../../database/mongo";

export default defineEventHandler(async (event: H3Event) => {
    const body = await readBody(event);
    console.log(body);
    /**
     * NOTE: this takes the credentials from the RegisterForm
     * and creates a new user, and adds it to the database
     */
    /**
     * IMPORTANTNOTE:
     * need to successfully connect to database first
     * otherwise, you will get a timeout error
     */
    await databaseConnect();
    const newUser = new User({
        email: body.email,
        password: body.password,
    });
    try {
        await User.create(newUser);
        console.log("New User Created");
        console.log(newUser);
    } catch (error) {
        console.error(error);
    }
});

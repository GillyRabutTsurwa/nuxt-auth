import type { H3Event } from "h3";
import { getServerSession } from "#auth";

export default defineEventHandler(async (event: H3Event) => {
    const session = await getServerSession(event);
    console.log("Session Data");

    /**
     * NOTE: returning the session data instead of my usual:
     * return {
     * session: session
     * }
     */
    return session;
});

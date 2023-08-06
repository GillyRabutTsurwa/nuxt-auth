import mongoose, { Schema } from "mongoose";

interface IUser {
    email: string;
    password: string;
}

const UserSchema: Schema = new mongoose.Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: false,
        },
    },
    {
        collection: "users",
    }
);

const User = mongoose.model<IUser>("User", UserSchema);
export default User;

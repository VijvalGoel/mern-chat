import { Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        username: { type: String, unique: true },
        password: String,
    },
    { timestamps: true }
);

const UserModel = model("User", UserSchema);

module.exports = UserModel;

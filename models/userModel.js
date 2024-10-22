import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        firstname: {
            type: String,
            required: true,
            unique: true,
        },
        lastname: {
            type: String,
            require: true,
            unique: true,
        },
        phone_number: {
            type: Number,
            require: true,
            unique: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
        },
        sockId: {
            type: String,
            default: null,
        },
    }
);

export default mongoose.model('users', UserSchema );
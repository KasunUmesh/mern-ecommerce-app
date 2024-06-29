import mongoose from "mongoose";
import * as SchemaTypes from "../types/SchemaTypes";

const UserSchema = new mongoose.Schema<SchemaTypes.IUser> ({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
import mongoose, {Document} from "mongoose";

export interface IProduct extends mongoose.Document {
    id: number,
    name: string,
    image: string,
    new_price: number,
    old_price: number,
    category: string,
    date?: Date,
    available?: boolean
}

export interface IUser extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    cartData: object,
    date?: Date
}
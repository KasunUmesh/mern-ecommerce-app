import mongoose, {Document} from "mongoose";

export interface IProduct extends mongoose.Document {
    id: number,
    name: string,
    image: string,
    new_price: number,
    old_price: number,
    date?: Date,
    available?: boolean
}
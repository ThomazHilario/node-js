import mongoose from "mongoose";

const { Schema } = mongoose

export const userSchema = new Schema({
    _id:Schema.Types.UUID,
    name:String,
    email:String,
    password:String
})

export default mongoose.model('User', userSchema)
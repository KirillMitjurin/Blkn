import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    login: String,
    passwordHash: String, 
})

export default mongoose.Schema("User", UserSchema)
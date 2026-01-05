import mongoose from "mongoose";

const TextSchema = new mongoose.Schema (
    {
        _id: String,
        ru: String, 
        en: String, 
        ee: String,
    });

export default mongoose.Schema("Text", TextSchema)
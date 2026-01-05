import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Image", ImageSchema);

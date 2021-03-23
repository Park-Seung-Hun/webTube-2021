import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    dafault: Date.now,
  },
});

const model = mongoose.model("comment", commentSchema);
export default model;

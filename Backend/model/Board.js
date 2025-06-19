import mongoose from "mongoose";

const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

const boardModel = mongoose.model("board", boardSchema);
export default boardModel;

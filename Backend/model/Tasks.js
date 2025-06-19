import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["To DO", "In Progress", "Done"],
      default: "To DO",
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    assignedTo: {
      type: String,
    },
    dueDate: {
      type: String,
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "board",
    },
  },
  { timestamps: true }
);
const taskModel = mongoose.model("task", taskSchema);
export default taskModel;

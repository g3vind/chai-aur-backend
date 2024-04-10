import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: True,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // model name
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sub todo",
      },
    ], // Array of sub todos
  },
  { timestamps: true }
)

export const Todo = mongoose.model("Todo", todoSchema)

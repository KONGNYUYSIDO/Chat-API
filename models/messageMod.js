import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  //   receiver: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "users",
  //     required: true,
  //   },
  text: {
    type: String,
    trim: true,
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chats",
  },
},
    {
        timestamps: true,
    }
);

export default mongoose.model("messages", messageSchema);

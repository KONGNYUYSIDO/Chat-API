import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
  {
    ChatName: {
      type: String,
      trim: true,
    },
    Groupchat: {
      type: Boolean,
      default: false,
    },
    Users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
    LatestMsg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messages",
    },
    Groupadmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("chats", ChatSchema);

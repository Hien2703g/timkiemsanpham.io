const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
    user_id: String,
    room_chat_id: String,
    content: String,
    images: Array,
    sendAt: Date,
    answer_id: String,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date
}, { timestamps: true });

const Chat = mongoose.model("Chat", chatSchema, "chat");
console.log(Chat);
module.exports = Chat;
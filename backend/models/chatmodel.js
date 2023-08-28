//ChatModel
// is Group Chat
//Users
//Latest Message
// Group Admin
const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')

const chatmodel = mongoose.Schema(
    {
        chatName: {type: String,  trim:true},
        isGroupChat: {type: Boolean, deafult: false},
        users: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message"
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    }
    ,{
        timestamps: true,
    }
)
const Chat = mongoose.model("Chat",chatmodel);
module.exports = Chat;
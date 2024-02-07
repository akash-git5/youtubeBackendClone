const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true, 
    },
    coverImage: {
        type: String, // clodinary url
    },
    watchHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    subscribers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    playlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Playlist"
        }
    ],
    subscribedTo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    token: {
        type: String,
    }

},{timestamps : true});


module.exports = mongoose.model("User",userSchema);
const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    duration: {
        type: Number,
        default: 0,
        required: true
    },
    videoFile: {
        type: String, // cloudinary url
        required: true
    },
    thumbnail: {
        type: String, // cloudinary url
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    views: {
        type: Number,
        default: 0
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ]

},{timestamps: true});

module.exports = mongoose.model("Video",videoSchema);
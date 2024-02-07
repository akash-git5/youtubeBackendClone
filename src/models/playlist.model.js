const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    decription: {
        type: String,
    },
    videos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        }
    ],

},{timestamps: true});


module.exports = mongoose.model("Playlist",playlistSchema);
const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }

},{timestamps: true});


module.exports = mongoose.model("Like",likeSchema);
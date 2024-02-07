const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        required: true
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }

},{timestamps: true});


module.exports = mongoose.model("Comment",commentSchema);

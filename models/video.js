const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    link: {
        type: String,
        required: true,
        trim: true
    },
    courseName: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true
})

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
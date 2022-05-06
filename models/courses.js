const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    owner: {
        type: String,
        lowercase: true
    },
    published: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    likes: {
        type: Array,
        default: [],
    },
    numberOfLikes: {
        type: Number,
        default: 0
    },
}, 
{
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    // Other fields related to a post
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
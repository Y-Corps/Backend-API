const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Assuming Post is the model for blog posts

router.post('/createPost', async (req, res) => {
    if (!req.body || !req.body.user || !req.body.password) {
        return res.status(400).send('user and password are required');
    }

    const { user, password } = req.body; // Assuming the POST request contains user and password fields
    try {
        const newPost = new Post({ user, password });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).send('Failed to create the post');
    }
});
router.route('/login').get(product.GetAllTest)
module.exports = router;
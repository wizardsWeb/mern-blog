const express = require('express');
const postRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { create, getposts, deletepost } = require('../controllers/post.controller');

postRouter.post('/create', verifyToken, create);
postRouter.get('/getposts', getposts);
postRouter.delete('/deletepost/:postId/:userId', verifyToken, deletepost);

module.exports = postRouter;

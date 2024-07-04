const express = require('express');
const commentRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { createComment, getPostComments, likeComment } = require('../controllers/comment.controller');

commentRouter.post('/create', verifyToken,  createComment)
commentRouter.get('/getPostComments/:postId', getPostComments);
commentRouter.put('/likeComment/:commentId', verifyToken, likeComment);

module.exports = commentRouter;
const express = require('express');
const commentRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { createComment, getPostComments, likeComment, editComment, deleteComment } = require('../controllers/comment.controller');

commentRouter.post('/create', verifyToken,  createComment)
commentRouter.get('/getPostComments/:postId', getPostComments);
commentRouter.put('/likeComment/:commentId', verifyToken, likeComment);
commentRouter.put('/editComment/:commentId', verifyToken, editComment);
commentRouter.delete('/deleteComment/:commentId', verifyToken, deleteComment);

module.exports = commentRouter;
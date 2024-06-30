const express = require('express');
const commentRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { createComment, getPostComments } = require('../controllers/comment.controller');

commentRouter.post('/create', verifyToken,  createComment)
commentRouter.get('/getPostComments/:postId', getPostComments);

module.exports = commentRouter;
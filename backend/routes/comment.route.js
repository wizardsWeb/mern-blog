const express = require('express');
const commentRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { createComment } = require('../controllers/comment.controller');

commentRouter.post('/create', verifyToken,  createComment)

module.exports = commentRouter;
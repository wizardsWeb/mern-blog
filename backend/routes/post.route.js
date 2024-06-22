const express = require('express');
const postRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { create, getposts } = require('../controllers/post.controller');

postRouter.post('/create', verifyToken, create);
postRouter.get('/getposts', getposts);

module.exports = postRouter;

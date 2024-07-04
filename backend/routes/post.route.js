const express = require('express');
const postRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { create, getposts, deletepost, updatepost } = require('../controllers/post.controller');

postRouter.post('/create', verifyToken, create);
postRouter.get('/getposts', getposts);
postRouter.delete('/deletepost/:postId/:userId', verifyToken, deletepost);
postRouter.put('/updatepost/:postId/:userId', verifyToken, updatepost)


module.exports = postRouter;

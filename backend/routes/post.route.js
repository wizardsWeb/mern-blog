const express = require('express');
const postRouter = express.Router();
const verifyToken = require('../utils/verifyUser');
const { create } = require('../controllers/post.controller');

postRouter.post('/create', verifyToken, create);

module.exports = postRouter;

const express = require('express');
const userRouter = express.Router();
const test = require('../controllers/user.controller')

userRouter.get('/test', test);

module.exports = userRouter;
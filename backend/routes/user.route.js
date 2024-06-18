const express = require('express');
const userRouter = express.Router();
const { test, updateUser } = require('../controllers/user.controller');
const verifyToken = require('../utils/verifyUser');

userRouter.get('/test', test);
userRouter.put('/update/:userId', verifyToken, updateUser);


module.exports = userRouter;
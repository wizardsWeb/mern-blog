const express = require('express');
const userRouter = express.Router();
const { test, updateUser, deleteUser } = require('../controllers/user.controller');
const verifyToken = require('../utils/verifyUser');

userRouter.get('/test', test);
userRouter.put('/update/:userId', verifyToken, updateUser);

userRouter.delete('/delete/:userId', verifyToken ,deleteUser)


module.exports = userRouter;
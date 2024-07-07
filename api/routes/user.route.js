const express = require('express');
const userRouter = express.Router();
const { test, updateUser, deleteUser, signout, getUsers, getUser } = require('../controllers/user.controller');
const verifyToken = require('../utils/verifyUser');

userRouter.get('/test', test);
userRouter.put('/update/:userId', verifyToken, updateUser);

userRouter.delete('/delete/:userId', verifyToken ,deleteUser);
userRouter.post('/signout', signout);

userRouter.get('/getusers', verifyToken, getUsers);

userRouter.get('/:userId', getUser);


module.exports = userRouter;
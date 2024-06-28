const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const postRouter = require('./routes/post.route');
const commentRouter = require('./routes/comment.route');
const PORT = 3000;

dotenv.config();
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Database successfully connected");
    })
    .catch((err) => {
        console.log(err);
    })


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/comment", commentRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});




app.listen(PORT, () => {
    console.log(`App is up and running of port ${PORT} `);
})
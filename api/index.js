const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const cookieParser = require('cookie-parser');
const postRouter = require('./routes/post.route');
const commentRouter = require('./routes/comment.route');
const path = require('path')
const PORT = 4000;

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

const frontendPath = path.join(__dirname, '/client/dist');
console.log('Serving static files from:', frontendPath); // Log the path for verification
app.use(express.static(frontendPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

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
    console.log(`App is up and running on port ${PORT}`);
});

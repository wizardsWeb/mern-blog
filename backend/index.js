const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
const PORT = 3000;

dotenv.config();
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

app.listen(PORT, () => {
    console.log(`App is up and running of port ${PORT} `);
})
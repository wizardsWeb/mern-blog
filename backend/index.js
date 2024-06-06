const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Database successfully connected");
    })
    .catch((err) => {
        console.log(err);
    })


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`App is up and running of port ${PORT} `);
})
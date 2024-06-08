const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');
const errorHandler = require("../utils/error");

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    
    if(!username || !email || !password || username === '' || email === '' || password === '') {
        next(errorHandler(400, 'All fields are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username, 
        email,
        password: hashedPassword,
    });

    
    try {
        await newUser.save();
        res.json("Signup Successful")
    }
    catch (error) {
        next(error)
    }
}

module.exports = signup;
const User = require("../models/user.model");
const bcryptjs = require('bcryptjs');
const errorHandler = require("../utils/error");
const jwt = require("jsonwebtoken");

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

const signin = async(req, res, next) => {

    const { email, password } = req.body;

    if(!email || !password || email === '' || password === '') {
        next(errorHandler(400, 'All fields are Required'))
    }

    try {

        const validUser = await User.findOne({ email });
        if( !validUser ) {
           return next(errorHandler(404, "Invalid Credentials"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);

        if(!validPassword) {
            return next(errorHandler(400, "Invalid Credentials"))
        }

        const token = jwt.sign ({ id: validUser._id }, process.env.JWT_SECRET);

        const{ password: pass, ...rest} = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest);

    } catch (error) {
        next (error);
    }

}

module.exports = {signup, signin};
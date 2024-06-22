const User = require("../Models/Users");
const jwt = require("jsonwebtoken");

const maxAge = 3*24*60*60;
const createToken = (id) => jwt.sign({id}, "ibex login secret key", {expiresIn: maxAge});

const handleErrors = (error) => {
    console.log(error)
    let errors = {email: null, password: null};
    if (error.message === "Incorrect Email") errors.email = "Email is not registered.";
    else if (error.message === "Incorrect Password") errors.email = "Password is incorrect.";
    else if (error.code === 11000) errors.email = "Email is already registered";
    else if (error.message.includes("Users validation failed")) {
        Object.values(error.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        });
    };
    return errors;
};

module.exports.register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        const user = await User.create({name: username, email, password});
        const token = createToken(user._id);
        res.cookie("ibex", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge*1000,
        });
        res.status(201).json({user: user._id, created: true});
    } catch (err) {
        const errors = handleErrors(err);
        res.json({errors, created: false});
    };
};

module.exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        console.log(req.body)
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("ibex", token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge*1000,
        });
        res.status(200).json({user: user._id, created: true});
    } catch (err) {
        console.log("ERROR", err)
        const errors = handleErrors(err);
        res.json({errors, created: false}); 
    };
};
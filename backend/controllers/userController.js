const User = require("../models/userModel");

//login user

const loginUSer = async(req, res) => {
    res.json({ msg: "login user" });
};

//signupuser
const signupUSer = async(req, res) => {
    res.json({ msg: "signup user" });
};

module.exports = { loginUSer, signupUSer };
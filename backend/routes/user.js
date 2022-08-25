const express = require("express");

const router = express.Router();

//controller functions
const { loginUSer, signupUser } = require("../controllers/userController");

//login route

router.post("/login", loginUSer);

//signup router
router.post("/signup", signupUser);

module.exports = router;
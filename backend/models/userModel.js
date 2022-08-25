const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
});

/// static signup method
userSchema.statics.signup = async function(email, password) {
    // validation

    if (!email || !password) {
        throw Error("all fields must be filled");
    }

    if (!validator.isEmail(email)) {
        throw Error("please enter valid email");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error(
            "password not strong enough-must have Capital and small letters and special signs and be longer than 8 caracters"
        );
    }
    //
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error("email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });
    return user;
};

module.exports = mongoose.model("User", userSchema);
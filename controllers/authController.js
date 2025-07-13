const userModel = require('../models/user-model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken');

module.exports.registerUser = async function (req, res) {
    try {
        const { email, password, full_name } = req.body;

        if (!email || !password || !full_name) {
            return res.status(400).send({ error: "All fields are required." });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: "Email already registered." });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const createdUser = await userModel.create({
            email,
            password: hash,
            full_name
        });

        const token = generateToken(createdUser);
        res.cookie("token", token, { httpOnly: true });
        res.send("User created successfully");

    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Internal Server Error" });
    }
};


module.exports.loginUser = async function (req, res) {

    let { email, password } = req.body;

    let user = await userModel.findOne({ email: email});
    if(!user){
        return res.status(400).send({ error: "Invalid email or password." });
    }
    bcrypt.compare(password, user.password, (err, result) => {
        if(result){
            const token = generateToken(user);
            res.cookie("token", token);
            return res.redirect("/users/shop");
        }
        else
        {
            return res.status(400).send({ error: "Invalid email or password." });
        }
         
    });
};

module.exports.logOut = function (req, res) {
    res.cookie("token", "");
    res.redirect('/');
}
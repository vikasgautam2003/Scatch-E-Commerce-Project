const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');


module.exports.isLoggedIn = async function (req, res, next) {
  if(!req.cookies.token) {
    req.flash("error", "You must be logged in to access this page.");
    return res.redirect('/');

  }


  try{
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    const user = await userModel
    .findOne({ email: decoded.email })
    .select("-password");

    req.user = user;
    next();

  }
    catch(err) {
        req.flash("error", " Something went wrong. Please try again.");
        return res.redirect('/');
    }
}
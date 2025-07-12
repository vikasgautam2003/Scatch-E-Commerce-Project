const mongoose = require('mongoose');




const userSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: { type: Array, default: [] },
    isadmin: { type: Boolean, default: false },
    orders: { type: Array, default: [] },
    contact: { type: Number, required: true },
    picture: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema);
const mongoose = require('mongoose');




const   OwnerSchema = new mongoose.Schema({
    full_name: { type: String, minLength: 3,required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    
    isadmin: { type: Boolean, default: false },
    orderproductss: { type: Array, default: [] },
    
    picture: { type: String, required: false }, 

    gstin: { type: String, required: false },
})

module.exports = mongoose.model('Owner', OwnerSchema);
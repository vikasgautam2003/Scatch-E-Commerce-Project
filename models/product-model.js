const mongoose = require('mongoose');




const productSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    bgcolor: { type: String, default: '#ffffff' },
    panelcolor: { type: String, default: '#ffffff' },
    textcolor: { type: String, default: '#000000' }
})

module.exports = mongoose.model('Product', productSchema);
    

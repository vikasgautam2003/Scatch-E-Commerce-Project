 const express = require('express');
 const router = express.Router();
 const upload = require('../config/multer-config'); 
 const productModel = require('../models/product-model');

 router.post('/create', upload.single("image"), async (req, res) => {
     try {
         const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
         const image = req.file.buffer;

         const newProduct = await productModel.create({
             image,
             name,
             price,
             discount,
             bgcolor,
             panelcolor,
             textcolor
         });

        //  res.status(201).send(newProduct);
            req.flash("success", "Product created successfully");
            res.redirect('/owner/admin');
     } catch (error) {
         res.status(500).send("Error creating product");
     }
 })
 
 module.exports = router;
const express = require('express');
const router = express.Router();

const ownerModel = require('../models/owners-Model'); 


router.get('/', (req, res) => {
    res.send("Hey");
})

if(process.env.NODE_ENV === "development")
{
    router.post("/create", async function(req, res) {
     let owners = await ownerModel.find();

      if (owners.length > 0) {
                return res.status(504).send("You don't have permission to create");
            }


    let { full_name, email, password } = req.body;

    let createdOwner = await ownerModel.create({
        full_name,
        email,
        password,
    });
        res.status(201).send(createdOwner);
    

 });
}





module.exports = router;
const express = require("express")
const router = express.Router();
const repository = require("../repository/user.repository");


router.get("/",async (req,res) =>{
    try{
        const users = await repository.getAllUsers()
        res.status(201).send(users)
    }catch(err){
        res.status(500).send({error:err.message})
    }
})

module.exports = router
const express = require("express");
const router = express.Router();

router.post("/register",(req,res)=>{
    if(!req.body){
        res.status(401).send("NOPE")
    }
})
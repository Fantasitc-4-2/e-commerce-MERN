const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller")
router.post("/register",async(req,res)=>{
   try{
     if(!req.body){
        res.status(401).send("All fields are required!")
    }
    const user =await controller.register(req.body)
    res.status(201).send(user)
   }catch(err){
    res.status(500).send({"error":err.message})
   }
})

router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router
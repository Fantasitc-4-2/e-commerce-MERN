const mongoose = require("mongoose");


const CartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    items:{
        type:Array,
        require:true,
    },
    totalPrice:{
        type:Number
    }
})
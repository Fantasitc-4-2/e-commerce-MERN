import express from "express";
const router = express.Router();
import * as categoryService from "../services/categoryService"
router.post("/category", async (req, res) => {
    const category = req.body;
    if(!category.name) {
        return res.status(400).send({"error" : "bad request"})
    }
    try {
        const createdCategory = categoryService.createCategory(category);
        return res.status(201).send(createdCategory);
    } catch(e) {
        console.log(e.message);
        return res.status(500).send({"error" : "internal server error"});
    }

})
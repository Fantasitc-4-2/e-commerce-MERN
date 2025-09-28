const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");

router.post("/register", async (req, res) => {
  try {
    const { email, password, username, phoneNumber } = req.body;
    if (!email || !password || !username || !phoneNumber) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    const user = await controller.register(req.body);
    res.status(201).json(user);
  } catch (err) {
    if (err.message.includes("exists")) {
      res.status(409).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});


router.get("/", async (req,res) => {
  res.status(201).json("hello")
});

module.exports = router;

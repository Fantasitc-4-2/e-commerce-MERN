const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { DB_URI } = require("./config/config");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => err.message);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

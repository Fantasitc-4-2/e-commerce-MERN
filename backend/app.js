const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT,DB_URI } = require("./config/config");
const authRouter = require("./route/auth.route")
const userRouter = require("./route/route")
app.use(express.json())

app.use("/auth",authRouter)
app.use("/users",userRouter)
mongoose
  .connect(DB_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => err.message);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(DB_URI)
})
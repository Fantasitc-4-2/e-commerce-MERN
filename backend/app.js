const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PORT,DB_URI } = require("./config/config");
const authRouter = require("./route/auth.route");
const userRouter = require("./route/route");
const logger = require("./middleware/logger");
const cookieParser = require("cookie-parser");
const reviewRouter = require("./route/review.router");

app.use(express.json())
app.use(cookieParser());
app.use(logger)

app.use("/auth",authRouter);
app.use("/users",userRouter);
app.use("/reviews",reviewRouter);
mongoose
  .connect(DB_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB Failed"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(DB_URI)
});
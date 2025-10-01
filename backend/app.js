import express from "express";
import mongoose from "mongoose";
import { PORT, DB_URI } from "./config/config.js";
import authRouter from "./route/auth.route.js";
import userRouter from "./route/route.js";
import logger from "./middleware/logger.js";
import cookieParser from "cookie-parser";
import reviewRouter from "./route/review.router.js";
import productRouter from "./route/product.route.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/reviews", reviewRouter);
app.use("/products", productRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ error: err.message, statusCode });
});

mongoose
  .connect(DB_URI)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB Failed"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(DB_URI);
});

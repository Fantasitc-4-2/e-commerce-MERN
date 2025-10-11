import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // ✅ Correct import
import cookieParser from "cookie-parser";

import { PORT, DB_URI } from "./config/config.js";
import authRouter from "./route/auth.route.js";
import userRouter from "./route/route.js";
import reviewRouter from "./route/review.router.js";
import productRouter from "./route/product.route.js";
import cartRouter from "./route/cart.route.js";
import addressRoutes from "./route/address.route.js";
import categoryRoutes from "./route/category.route.js";
import logger from "./middleware/logger.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(logger);

// ✅ Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/reviews", reviewRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/addresses", addressRoutes);
app.use("/categories", categoryRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ error: err.message, statusCode });
});
mongoose
  .connect(DB_URI)
  .then(() => console.log("✅ DB Connected"))
  .catch((err) => console.error("❌ DB Connection Failed:", err));

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
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
import orderRouter from "./route/order.route.js";
import wishlistRoutes from "./route/wishlist.routes.js";
import { createOnlineSession } from "./controllers/order.controller.js";

const app = express();

// Security Headers Middleware
app.use((req, res, next) => {
  // Content Security Policy
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://api.stripe.com https://*.vercel.app; frame-src 'self' https://js.stripe.com https://hooks.stripe.com;"
  );

  // X-Frame-Options: Prevent clickjacking
  res.setHeader("X-Frame-Options", "DENY");

  // X-Content-Type-Options: Prevent MIME type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Strict-Transport-Security: Enforce HTTPS
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  // Referrer-Policy: Control referrer information
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions-Policy: Restrict browser features
  res.setHeader(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=()"
  );

  next();
});

// CORS Configuration - Fixed: removed trailing slash
const allowedOrigins = [
  "https://electronia-4.netlify.app", // Frontend (Netlify)
  "https://e-commerce-mern-five-sage.vercel.app", // Backend
  process.env.FRONTEND_URL,
  "http://localhost:5173", // Development
]
  .flat()
  .filter(Boolean);
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  createOnlineSession
);

app.use(express.json());
app.use(cookieParser());
app.use(logger);

app.get("/", (req, res) => res.send("Hello World!"));

// ✅ Routes
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/reviews", reviewRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/addresses", addressRoutes);
app.use("/categories", categoryRoutes);
app.use("/orders", orderRouter);
app.use("/wishlist", wishlistRoutes);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ error: err.message, statusCode });
});

// ✅ Database Connection
mongoose
  .connect(DB_URI)
  .then(() => console.log(`DB Connected`))
  .catch((err) => console.error("❌ DB Connection Failed:", err));

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ✅ CRITICAL: Export the app for Vercel
export default app;

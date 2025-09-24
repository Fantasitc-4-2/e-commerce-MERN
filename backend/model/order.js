const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      eum: ["pending", "processing", "shipped", "deliverd", "cancelled"],
      default: "pending",
    },
    payment: {
      method: {
        type: String,
        eum: ["cash on deleviry", "card"],
        default: "cash on deleviry",
      },
      status: {
        type: String,
        eum: ["pending", "paid", "failed"],
        default: "pending",
      },
      transactionId: { type: String },
    },
    shipping: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String },
      postal_code: { type: String },
      country: { type: String, required: true },
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    cartId: {
      type: mongoose.Types.ObjectId,
      ref: "Cart",
      require: true,
    },
  },
  
  { timestamps: true }
);

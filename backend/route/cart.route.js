import express from "express";
import * as cartController from "../controllers/cart.controller.js";
import auth from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

// Add to cart / Get logged-in user's cart
cartRouter.route("/")
  .post(auth, cartController.addToCart)
  .get(auth, cartController.getLoggedUsercart);

// Get, Update, or Delete specific cart by ID
cartRouter.route("/:id")
  .get(auth, cartController.getCartById)
  .put(auth, cartController.updateQuantity)
  .delete(auth, cartController.removeFromCart);

export default cartRouter;

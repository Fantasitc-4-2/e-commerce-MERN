import express from "express";
import * as cartController from "../controllers/cart.controller.js";
import auth from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.route("/").post(auth, cartController.addToCart);
cartRouter.route("/:id").delete(auth, cartController.removeFromCart);
cartRouter.route("/:id").put(auth, cartController.updateQuantity);

export default cartRouter;

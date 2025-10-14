import express from "express";
import * as orderController from "../controllers/order.controller.js";
import auth from "../middleware/authMiddleware.js";
import authorizeUser from "../middleware/roleAuthMiddleware.js";

const orderRouter = express.Router();

orderRouter
  .route("/:id")
  .post(auth, orderController.createCashOrder)
//   .get(auth, orderController.getUserOrders);
orderRouter
  .route("/")
  .get(auth, authorizeUser("admin", "user"), orderController.getUserOrders);

export default orderRouter;

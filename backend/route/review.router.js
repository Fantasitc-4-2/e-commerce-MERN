import express from "express";
import { addReview, deleteReview, getAllReview } from "../controllers/review.controller.js";
import auth from "../middleware/authMiddleware.js";
import authorizeUser from "../middleware/roleAuthMiddleware.js";

const reviewRouter = express.Router();

reviewRouter
  .route("/")
  .get(getAllReview)
  .post(auth,addReview);
reviewRouter
  .route("/:id")
  .delete(auth,authorizeUser('admin') ,deleteReview);
export default reviewRouter;

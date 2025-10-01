import express from "express";
import { addReview, deleteReview, getAllReview, getOneReview, updateReview } from "../controllers/review.controller.js";
import auth from "../middleware/authMiddleware.js";
import authorizeUser from "../middleware/roleAuthMiddleware.js";

const reviewRouter = express.Router();

reviewRouter
  .route("/")
  .get(getAllReview)
  .post(auth,addReview);
reviewRouter
  .route("/:id")
  .get(getOneReview)
  .put(auth,updateReview)
  .delete(auth,deleteReview)
export default reviewRouter;

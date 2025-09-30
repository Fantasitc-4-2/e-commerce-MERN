import express from "express";
import { addReview, getAllReview } from "../controllers/review.controller.js";

const reviewRouter = express.Router();

reviewRouter
  .route("/")
  .get(getAllReview)
  .post(addReview);

export default reviewRouter;

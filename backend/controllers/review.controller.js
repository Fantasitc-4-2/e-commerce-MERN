import {catchAsyncError} from "../middleware/catchAsyncError.js";
import reviewModel from "../model/review.js";

export const getAllReview = catchAsyncError(async (req, res, next) => {
  let result = await reviewModel.find();
  res.json({ message: "Success", result });
});

export const addReview = catchAsyncError(async (req, res, next) => {
  let result = reviewModel;
});

const catchAsyncError = require("../middleware/catchAsyncError.js");
const reviewModel = require("../model/review.js");

exports.getAllReview = catchAsyncError(async (req, res, next) => {
  let result = await reviewModel.find();
  res.json({ message: "Success", result });
});
exports.addReview = catchAsyncError(async (req, res, next) => {
  let result = reviewModel;
});

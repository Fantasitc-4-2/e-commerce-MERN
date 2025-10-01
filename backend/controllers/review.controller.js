import { catchAsyncError } from "../middleware/catchAsyncError.js";
import reviewModel from "../model/review.js";
import { AppError } from "../utils/AppError.js";

export const getAllReview = catchAsyncError(async (req, res, next) => {
  let result = await reviewModel.find();
  res.json({ message: "Success", result });
});

export const addReview = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;

  let isExist = await reviewModel.findOne({
    user: req.user.id,
    product: req.body.product,
  });
  // if (isExist) return next(new AppError(`you have created a review before`, 409))
  if (isExist) return next(new AppError(`you have created a review before`, 409));

  // isExist && next(new AppError(`you have created a review before`, 409))

  let result = new reviewModel(req.body);
  await result.save();
  res.json({ message: "Success", result });
});
export const deleteReview = catchAsyncError(async (req, res, next) => {
  
const params =req.params

});

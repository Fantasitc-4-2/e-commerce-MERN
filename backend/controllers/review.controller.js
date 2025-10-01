import { catchAsyncError } from "../middleware/catchAsyncError.js";
import reviewModel from "../model/review.js";
import { AppError } from "../utils/AppError.js";

export const getAllReview = catchAsyncError(async (req, res, next) => {
  let result = await reviewModel.find();
  res.json({ message: "Success", result });
});
export const getOneReview = catchAsyncError(async (req, res, next) => {
     const { id } = req.params
        let result = await reviewModel.findById(id)

        !result && next(new AppError(`Review not found`, 404))
        result && res.status(200).json({ message: "success", result })

});

export const addReview = catchAsyncError(async (req, res, next) => {
  req.body.user = req.user.id;

  let isExist = await reviewModel.findOne({
    user: req.user.id,
    product: req.body.product,
  });
  if (isExist)
    return next(new AppError(`you have created a review before`, 409));


  let result = new reviewModel(req.body);
  await result.save();
  res.json({ message: "Success", result });
});
export const deleteReview = catchAsyncError(async (req, res, next) => {
  let review = await reviewModel.findById(req.params.id);
  if (!review) return next(new AppError(`review not found`, 404));



  if (req.user.roles.includes("admin") || review.user == req.user.id) {
    let result = await reviewModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Success", result });
  } else {
    return next(new AppError(`You can not do this action`, 409));
  }
  // res.json({ message: "Success" });
});


export const updateReview = catchAsyncError(async (req, res, next) => {
  let review = await reviewModel.findById(req.params.id);
  if (!review) return next(new AppError(`review not found`, 404));



  if (req.user.roles.includes("admin") || review.user.toString() == req.user.id) {
    let result = await reviewModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json({ message: "Success", result });
  } else {
    return next(new AppError(`You can not do this action`, 409));
  }
  // res.json({ message: "Success" });
});
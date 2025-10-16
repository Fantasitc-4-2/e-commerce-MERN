import  reviewModel from "../model/review.js";
import mongoose from "mongoose";

export const getReviewsByProductId = async (id) => {
    if(mongoose.Types.ObjectId.isValid(id)) {
        return await reviewModel.find(
            {product: new mongoose.Types.ObjectId(id)}
        );
    } else {
        return [];
    }
}
export const getReviewsForProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    // Get all reviews for that product
    const reviews = await reviewRepository.getReviewsByProductId(productId);

    // If no reviews exist
    if (!reviews || reviews.length === 0) {
      return res.status(200).json({
        count: 0,
        averageRating: 0,
        reviews: [],
      });
    }

    // Calculate average rating
    const totalRatings = reviews.reduce((sum, r) => sum + r.ratings, 0);
    const averageRating = (totalRatings / reviews.length).toFixed(1);

    res.status(200).json({
      count: reviews.length,
      averageRating: Number(averageRating),
      reviews,
    });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Server error" });
  }
};
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
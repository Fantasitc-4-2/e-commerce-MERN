import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    comment: {
        type: String,
        trim: true,
        required: [true, 'review comment required'],
    },
    // product: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "product"
    // },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    ratings: {
        type: Number,
        min: 1,
        max: 5,
    }
}, { timestamps: true })



export const reviewModel = mongoose.model('Review', reviewSchema)
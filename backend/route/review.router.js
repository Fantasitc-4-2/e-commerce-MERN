

const express = require('express')
const { addReview, getAllReview } = require('../controllers/review.controller')
const reviewRouter =express.Router()


reviewRouter
.route('/')
.get(getAllReview)
.post(addReview)


module.exports = reviewRouter;

const express = require("express");
const { userReview, allReviews } = require("../controllers/reviewControllers");
const router = express.Router();

router.get("/review" , userReview)
router.get("/all-review", allReviews)

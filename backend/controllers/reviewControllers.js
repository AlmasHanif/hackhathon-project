const Review = require("../models/review");


module.exports.createReview = async (req, res) => {
    const newReview = new Review(req.body);
    try {
        const saveReview = await newReview.save();
        res.status(201).json(saveReview);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};

///get user Review////

module.exports.userReview = async(erq , res) => {
    try {
        const book = await Review.findOne({ userId: req.params.userId });
        res.status(201).json(book);
      } catch (err) {
        res.status(500).json(err);
      }
};


//// get all bookings ///

module.exports.allReviews = async(req , res) => {
    try {
        const Reviews = Review.find();
        res.status(201).json(Reviews);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
};
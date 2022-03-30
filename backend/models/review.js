const moongose = require("mongoose");

const ReviewSchema = new moongose.Schema({
    name : {
        required: true,
        type: String
    },
    email : {
        required :true,
        type: String
    },
    reviews:{
        required: true,
        type: String
    },
    date: Date.now
})

const ReviewModel = moongose.model("Review" , ReviewSchema);
module.exports = ReviewModel;
const moongose = require("mongoose");

const BookingSchema = new moongose.Schema({
    name : {
        required: true,
        type: String
    },
    email : {
        required :true,
        type: String
    },
    car_model:{
        required: true,
        type: String
    },
    date: Date.now
})

const BookingModel = moongose.model("Booking" , BookingSchema);
module.exports = BookingModel;
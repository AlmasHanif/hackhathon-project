const Booking = require("../models/booking");


module.exports.createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const saveBooking = await newBooking.save();
        res.status(201).json(saveBooking);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};

///get user booking////

module.exports.userBooking = async(erq , res) => {
    try {
        const book = await Booking.findOne({ userId: req.params.userId });
        res.status(201).json(book);
      } catch (err) {
        res.status(500).json(err);
      }
};


//// get all bookings ///

module.exports.allBookings = async(req , res) => {
    try {
        const bookings = Booking.find();
        res.status(201).json(bookings);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
};
const express = require("express");
const { userBooking, allBookings } = require("../controllers/bookingControllers");
const router = express.Router();

router.get("/booking" , userBooking)
router.get("/all-bookings", allBookings)

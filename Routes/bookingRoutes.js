const express = require("express");
const bookingController = require("../Controllers/bookingController");

const bookingRouter = express.Router();

bookingRouter
  .route("/")
  .get(bookingController.getAllBookings)
  .post(bookingController.createBooking);

bookingRouter
  .route("/:id")
  .get(bookingController.getBooking)
  .delete(bookingController.deleteBooking)
  .patch(bookingController.updateBooking);

module.exports = bookingRouter;

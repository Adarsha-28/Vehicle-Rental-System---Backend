const Booking = require("../Models/bookingModel");

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json({
      status: "Successful",
      length: bookings.length,
      data: {
        bookings
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail",
      message: err.message
    });
  }
};

exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        status: "Not Found",
        message: "Invalid Booking ID"
      });
    }

    res.status(200).json({
      status: "Successful",
      data: {
        booking
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message
    });
  }
};

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        booking
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed to create booking",
      message: err.message
    });
  }
};

exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!booking) {
      return res.status(404).json({ status: "Fail", message: "Booking not found" });
    }
    res.status(200).json({ status: "Success", data: { booking } });
  } catch (err) {
    res.status(400).json({ status: "Fail", message: err.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "Deleted",
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail",
      message: err.message
    });
  }
};

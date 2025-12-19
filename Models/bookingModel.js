const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  vehicleId: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  rentPerDay: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
  },
  startDate: {
    type: String,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  bookedAt: {
    type: Date,
    default: Date.now,
  },

  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;

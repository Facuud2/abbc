// BackEnd/controllers/reservationController.js
const Reservation = require('../models/reservation');

exports.getAllReservations = async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.json(reservations);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

exports.createReservation = async (req, res) => {
  const reservation = new Reservation(req.body);
  try {
    const newReservation = await reservation.save();
    res.status(201).json(newReservation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
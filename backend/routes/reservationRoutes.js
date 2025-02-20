// BackEnd/routes/reservationRoutes.js
const express = require('express');
const router = express.Router();
const { getAllReservations, createReservation } = require('../controllers/reservationController');

router.get('/', getAllReservations);  // Obtener todas las reservas
router.post('/', createReservation);  // Crear una nueva reserva

module.exports = router;
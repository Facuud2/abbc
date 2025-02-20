// BackEnd/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reservationRoutes = require('./routes/reservationRoutes');
const connectDB = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/api/reservations', reservationRoutes);

module.exports = app;
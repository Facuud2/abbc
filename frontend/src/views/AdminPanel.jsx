// FrontEnd/src/views/AdminPanel.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReservationTable from '../components/ReservationTable';
import ReservationForm from './ReservationForm';

const AdminPanel = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const response = await axios.get('http://localhost:3000/api/reservations');
    setReservations(response.data);
  };

//   console.log(fetchReservations());

  const handleReservationCreated = (newReservation) => {
    setReservations([newReservation, ...reservations]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Panel Admin</h1>

      <h2 className="text-lg font-semibold mb-4">Crear Nueva Reserva</h2>
      <ReservationForm onReservationCreated={handleReservationCreated} />

      <h2 className="text-lg font-semibold mt-8 mb-4">Reservas Actuales</h2>
      <ReservationTable reservations={reservations} />
    </div>
  );
};

export default AdminPanel;


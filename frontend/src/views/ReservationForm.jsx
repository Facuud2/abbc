// FrontEnd/src/components/ReservationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ReservationForm = ({ onReservationCreated }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: '',
    image: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/reservations', formData);
      onReservationCreated(response.data); // Notificar al padre sobre la nueva reserva
      setFormData({
        name: '',
        date: '',
        time: '',
        guests: '',
        image: '',
      });
    } catch (error) {
      console.error('Error al crear la reserva:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block font-medium">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="date" className="block font-medium">
          Fecha:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="time" className="block font-medium">
          Hora:
        </label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="guests" className="block font-medium">
          Huéspedes:
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label htmlFor="image" className="block font-medium">
          URL de Imagen:
        </label>
        <input
          type="url"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Crear Reserva
      </button>
    </form>
  );
};

export default ReservationForm;
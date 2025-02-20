import axios from 'axios';

export const fetchReservations = async () => {
  const response = await axios.get('/api/reservations');
  return response.data;
};

export const createReservation = async (data) => {
  const response = await axios.post('/api/reservations', data);
  return response.data;
};
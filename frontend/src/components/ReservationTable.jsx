import React from 'react';

const ReservationTable = ({ reservations }) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Fecha</th>
        <th>Hora</th>
      </tr>
    </thead>
    <tbody>
      {reservations.map((reservation) => (
        <tr key={reservation._id}>
          <td>{reservation.name}</td>
          <td>{reservation.date}</td>
          <td>{reservation.time}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ReservationTable;
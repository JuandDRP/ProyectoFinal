import React, { useState } from 'react';
import SeatMap from './Board';
import './Reservation.css';

const Reservation = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatSelect = (seats) => {
        setSelectedSeats(seats);
    };

    const handleReservation = () => {
        alert(`Has reservado los siguientes asientos: ${selectedSeats.map(seat => seat.id).join(', ')}`);
    };

    return (
        <div className="reservation">
            <h1>Reserva tu asiento</h1>
            <SeatMap onSeatSelect={handleSeatSelect} />
            <button onClick={handleReservation} disabled={selectedSeats.length === 0}>
                Reservar
            </button>
        </div>
    );
};

export default Reservation;
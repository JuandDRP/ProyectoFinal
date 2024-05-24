import React, { useState, useEffect } from 'react';
import Seat from './Silla';
import './Board.css';

const generateSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
    const seatsPerRow = 20;
    let seats = [];

    rows.forEach(row => {
        for (let i = 1; i <= seatsPerRow; i++) {
            seats.push({
                id: `${row}${i}`,
                label: `${i}`,
                reserved: false,
                selected: false
            });
        }
    });

    return seats;
};

const Board = ({ onSeatSelect }) => {
    const [seatMap, setSeatMap] = useState(generateSeats());

    // Cargar datos de localStorage si existen
    useEffect(() => {
        const storedSeats = localStorage.getItem('seatMap');
        if (storedSeats) {
            setSeatMap(JSON.parse(storedSeats));
        }
    }, []);

    const handleSeatClick = (id) => {
        const updatedSeats = seatMap.map(seat => 
            seat.id === id ? { ...seat, selected: !seat.selected } : seat
        );
        setSeatMap(updatedSeats);
        onSeatSelect(updatedSeats.filter(seat => seat.selected));
    };

    const reservarSillas = () => {
        const updatedSeats = seatMap.map(seat => 
            seat.selected ? { ...seat, reserved: true, selected: false } : seat
        );
        setSeatMap(updatedSeats);
        localStorage.setItem('seatMap', JSON.stringify(updatedSeats));
        alert('Sillas reservadas con éxito');
    };

    return (
        <div className="seat-map">
            <div className="screen">SCREEN</div>
            {seatMap.map(seat => (
                <Seat key={seat.id} seat={seat} onSeatClick={handleSeatClick} />
            ))}
            <button onClick={reservarSillas}>Reservar</button>
        </div>
    );
};

export default Board;

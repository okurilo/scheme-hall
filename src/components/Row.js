// import Row from './Row';
import React from 'react';

const Row = ({ rows }) => 
    <li className="seat-row-seat">
        {rows.map((row, i) =>
            <div key={i} className="container">
                <span key={i}>{row.text}</span>
            </div>
        )}
    </li>

export default Row;
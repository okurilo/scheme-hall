import React, { Component } from 'react';

const Seat = ({selected = false, onClick = f => f, num, text}) => 
        <div key={num} onClick={onClick} className={(selected) ? "seat-yes" : ""}>
            <span key={num}>{text}</span>
        </div>
Seat.propTypes = {
    // selected: Prop
}
export default Seat;
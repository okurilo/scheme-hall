import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Row from './Row';
import Seat from './Seat';

class Row extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seats: []//props.seatSelected || false
        }
        this.change = this.change.bind(this)
    }
    change (seatSelected, i) {
        console.log("Click!", seatSelected)
        const seats = [...this.state.seats];
        seats[i] = seatSelected ? false : true
        // seatSelected[i] = seatSelected[i] ? false : true;
        this.setState({seats});
    }
    render() {
        const {rows} = this.props
        const { seats } = this.state
        return (
            <li className="seat-row-seat">
                {rows.map((row, i) =>
                    <Seat selected={seats[i]} onClick={() => this.change(seats[i], i) } key={i} num={i} text={row.text} />
                )}
            </li>
        )
    }
    
} 


export default Row;
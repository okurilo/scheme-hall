import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Row from './Row';
import Seat from './Seat';

class Row extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seatSelected: props.seatSelected || false
        }
        this.change = this.change.bind(this)
    }
    change (seatSelected) {
        console.log("Click!", seatSelected)
        seatSelected = seatSelected ? false : true;
        this.setState({seatSelected})
    }
    render() {
        const {rows} = this.props
        const {seatSelected} = this.state
        return (
            <li className="seat-row-seat">
                {rows.map((row, i) =>
                    <Seat selected={seatSelected} onClick={() => this.change(seatSelected) } key={i} num={i} text={row.text} />
                )}
            </li>
        )
    }
    
} 


export default Row;
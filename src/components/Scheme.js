import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class Scheme extends Component {
    render() {
        const {rows} = this.props;
        return (
            <ul className="seat-selection">
                {rows.map((rows, i) => {
                    return <Row key={i} {...rows} />
                   }
                )}
            </ul>
        )
    }
} 
Scheme.propTypes = {
    rows: PropTypes.array.isRequired
    // rows: (props, propName) => 
    //     (typeof props[propName] !== "string") ? new Error("Oh! What are you doing?") : null
};
Scheme.defaultProps = {
    rows: (function () {
        let lengthColumns = 30,
            countRows = 10,
            rows = [];
        let lastSeatNum = 0;
        for (let i = 0; i < countRows; i++) {
            let row = [];
            for (let i = 0; i < lengthColumns; i++) {
                row.push({text: i})
                // ++lastSeatNum;
                // row.push({text: lastSeatNum})
            }
            rows.push({rows: row})
        }
        return rows
    })()
};

// const Scheme = ({ rows }) =>
//     <ul className="seat-selection">
//         {rows.map((rows, i) => {
//             return <Row key={i} {...rows} />
//            }
//         )}
//     </ul>

export default Scheme;
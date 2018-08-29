import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class Scheme extends Component {
    // displayName: "Scheme"
    // static defaultProps = {
    //     rows: function () {
    //         let lengthColumns = 50,
    //             countRows = 10,
    //             rows = [];
    //         let row = countRows.map((el, i) => { return {text: i} } )
    //         lengthColumns.forEach(() => rows.push(row));
    //         return rows
    //     }
    // };
    // getDefaultProps () {
    //     let lengthColumns = 50,
    //         countRows = 10,
    //         rows = [];
    //     return {
    //         rows: function () {
    //             let row = countRows.map((el, i) => { return {text: i} } )
    //             rows.push(row);
    //             return rows
    //         }
    //     }
    // }
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
        for (let i = 0; i < countRows; i++) {
            let row = [];
            for (let i = 0; i < lengthColumns; i++) {
                row.push({text: i})
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
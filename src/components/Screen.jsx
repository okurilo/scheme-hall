import React, { Component } from 'react';
import screenImage from "../img/screen.jpg";

class Screen extends Component {
    render() {
        return (
            <div style={{width: 100 + "%"}}>
                <img style={{height: 60 + "px", width: 800 + "px", 'maxWidth': 100 + "%"}} alt="Screen" src={screenImage}></img>
            </div>
        )
    }
}

export default Screen;
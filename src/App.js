import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './scss/base.scss';
import Scheme from './components/Scheme';
import Screen from './components/Screen';
import {data, filledData} from './data/rows';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <div>
          <Screen></Screen>
          <Scheme ></Scheme>
          <Scheme rows={filledData}></Scheme>
          {/* <Scheme rows={filledData}></Scheme> */}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;

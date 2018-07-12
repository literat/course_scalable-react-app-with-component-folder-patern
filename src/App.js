import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GiphySearch from './GiphySearch';
import SpinLoad from './SpinLoad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Giphy Search</h2>
          <GiphySearch initialQuery="dog" RenderLoading={SpinLoad} />
        </div>
      </div>
    );
  }
}

export default App;

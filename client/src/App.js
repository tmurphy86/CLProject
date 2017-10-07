import React, { Component } from 'react';
import {Header, Search} from "./components"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;

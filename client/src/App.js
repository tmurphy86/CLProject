import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import {Header} from "./Components";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import routes from './routes';


class App extends Component {
  // state = {
  //   authenticated
  // }
  render() {
    return (
      <MuiThemeProvider>
        <Router>
      <div className="App">
        <Header />
          {routes}

      </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

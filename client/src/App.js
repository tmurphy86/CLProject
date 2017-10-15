import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header, Search} from "./Components";
import { Base } from "./Components/Login";
import { LoginPage, SignUpPage } from './Containers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// const muiThemebtn = getMuiTheme()
// import {PostPage} from "./Pages";
import './App.css';
import routes from './routes';

class App extends Component {
  // state = {
  //   authenticated
  // }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
          {routes}
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

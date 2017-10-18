import React, { Component } from 'react';
// import {Header} from "./components";
import {PostPage, NewPostPage} from "./Pages";
import { BrowserRouter as Router, Route, Switch, NavLink} from "react-router-dom";
import {Header, Search} from "./Components";
import { Base } from "./Components/Login";
import { LoginPage, SignUpPage } from './Containers';
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

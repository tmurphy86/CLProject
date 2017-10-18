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
          <Header />
      <div className="App">

          <div className="top-bar">
            <div className="top-bar-left">
              <NavLink to="/">CraigsList2.0</NavLink>
            </div>

            <div className="top-bar-right">
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/signup">Sign up</NavLink>
            </div>

          </div>


          {routes}

      </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

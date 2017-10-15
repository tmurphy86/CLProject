import React, { Component } from 'react';

import {Header, Search} from "./Components";
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
        {/* <Header /> */}
        {/* <Search /> */}
        {/* <LoginPage /> */}
          {routes}


      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

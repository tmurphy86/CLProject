import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header, Search} from "./components";
import {PostPage} from "./pages";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Router>
          <Switch>
            <Route exact path="/" />
            <Route path="/region/forsale/category/post/2" component={PostPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

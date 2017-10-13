import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header} from "./components";
import {PostPage} from "./pages";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" />
            {/* The (\d) is a regular expression that makes sure that the Post route parameter is an integer. */}
            <Route path="/r/region/d/forsale/c/category/post/:postId(\d)" component={PostPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

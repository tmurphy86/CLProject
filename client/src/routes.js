import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { LoginPage, SignUpPage, DashboardPage } from './Containers';
import Auth from './modules/Auth';
import {PostPage, NewPostPage} from "./Pages";



const routes = (
  <Switch>
      <Route path="/" exact component={Auth.isUserAuthenticated() ? DashboardPage: LoginPage }/>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage}/>
      {/* The (\d) is a regular expression that makes sure that the Post route parameter is an integer. */}
      <Route path="/c/category/post/:postId(\d)" component={PostPage} />
      <Route path="/newpost" exact component={NewPostPage} />
      <Route path="/dashboard" exact component={DashboardPage}/>
      {/* <Route path="/logout" exact component={`onEnter: (nextState, replace) => {
              Auth.deauthenticateUser();
              replace('/');
            }`}/> */}
      <Route path="*" component={LoginPage} />
  </Switch>

)


export default routes;

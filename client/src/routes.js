import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


// import App from './Components/app';
// import NotFoundPage from './Components/pages/not-found-page';

import { Base } from './Components/Login';
import { LoginPage, SignUpPage, DashboardPage } from './Containers';
import Auth from './modules/Auth';



const routes = (
  <Switch>
      <Route path="/" exact component={Auth.isUserAuthenticated() ? DashboardPage: LoginPage }/>
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignUpPage}/>
      {/* The (\d) is a regular expression that makes sure that the Post route parameter is an integer. */}
      <Route path="/r/region/d/forsale/c/category/post/:postId(\d)" component={PostPage} />
      <Route path="/newpost" component={NewPostPage} />
      <Route path="/dashboard" exact component={DashboardPage}/>
      <Route path="/user/:userId" exact component={LoginPage} />
      <Route path="*" component={LoginPage} />
  </Switch>

)

//
// const routes = {
//   // base component (wrapper for the whole application).
//
//
//   component: Base,
//   childRoutes: [
//
//     {
//       path: '/',
//       getComponent: (location, callback) => {
//         if (Auth.isUserAuthenticated()) {
//           callback(null, DashboardPage);
//         } else {
//           callback(null, LoginPage);
//         }
//       }
//     },
//
//     {
//       path: '/login',
//       component: LoginPage
//     },
//
//     {
//       path: '/signup',
//       component: SignUpPage
//     },
//
//     {
//       path: '/logout',
//       onEnter: (nextState, replace) => {
//         Auth.deauthenticateUser();
//
//         // change the current URL to /
//         replace('/');
//       }
//     }
//
//   ]
//
// };

export default routes;

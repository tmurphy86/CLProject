import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


// import App from './Components/app';
// import NotFoundPage from './Components/pages/not-found-page';

import { RequireAuth, Base} from './Components/Login';
import { LoginPage, SignUpPage } from './Containers';



const routes = (
  <Router>
  <Switch>
  <Route path="/" exact component={SignUpPage} />
  <Route path="/login" component={LoginPage} />
  <Route path="/users" component={SignUpPage}/>
  <Route path="/user/:userId" component={LoginPage} />
  <Route path="*" component={SignUpPage} />
  </Switch>
</Router>
)


// const routes = {
// component: Base,
//  childRoutes: [
//
//    {
//      path: '/',
//      component: SignUpPage
//    },
//
//    {
//      path: '/login',
//      component: LoginPage
//    },
//
//    {
//      path: '/signup',
//      component: SignUpPage
//    }
//
//  ]
// };
//   <Route path="/" component={LoginForm} />
//
// );

export default routes

{/* <IndexRoute component={HomePage} />
<Route path="register" component={Register} />
<Route path="login" component={Login} />
<Route path="dashboard" component={Dashboard} /> */}

{/* <Route path="*" component={NotFoundPage} /> */}
{/* </Route> */}

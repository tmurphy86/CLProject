import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

// import App from './Components/app';
// import NotFoundPage from './Components/pages/not-found-page';

import { RequireAuth, Base} from './Components/Login';
import { LoginPage, SignUpPage } from './Containers';



const routes = (
  <Route path="/" component={Base}>
    <Route path="login" component={LoginPage} />
    <Route path="users" component={SignUpPage}>
      {/* <Route path="/user/:userId" component={User} /> */}
    </Route>
    <Route path="*" component={SignUpPage} />
  </Route>
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

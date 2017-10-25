import React from 'react';
import { Route, Switch} from "react-router-dom";
import { LoginPage, SignUpPage, DashboardPage } from './Containers';
import Auth from './modules/Auth';
import {PostPage, NewPostPage, CategoriesPage, CategoryPage, SearchPage, PostEditPage} from './Pages';




const routes = (
  <Switch>
    <Route path="/" exact component= {CategoriesPage}/>
    <Route path="/login" exact component={Auth.isUserAuthenticated() ? CategoriesPage : LoginPage } />
    <Route path="/signup" exact component={SignUpPage}/>
    <Route exact path="/c/:category" component={CategoryPage} />
    {/* The (\d) is a regular expression that makes sure that the Post route parameter is an integer. */}
    <Route path="/c/:category/post/:postId(\d+)" component={PostPage} />
    <Route path="/search/:query" component={SearchPage} />
    <Route path="/newpost" exact component={Auth.isUserAuthenticated() ? NewPostPage : LoginPage } />
    <Route path="/post/edit/:id" exact component={Auth.isUserAuthenticated() ? PostEditPage : LoginPage } />
    <Route path="/dashboard" exact component={Auth.isUserAuthenticated() ? DashboardPage : LoginPage}/>
    <Route path="*" component={CategoriesPage} />
  </Switch>

)


export default routes;

import React from 'react';
import {HeaderNavigation} from "./";
import './Header.css';
import logo from './clLogo.svg';

class Header extends React.Component {
  render(){
    return (
      <div>
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="bold-text">CRAIGSLIST</h1>
        <HeaderNavigation />
      </div>
    )
  }
}

export default Header;

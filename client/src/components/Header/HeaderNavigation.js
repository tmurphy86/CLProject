import React from 'react';


class HeaderNavigation extends React.Component {
  render(){
    return(
      <ul className="Header-navigation">
        <li>
          <a href="/#">Login</a>
        </li>
        <li>
          <a href="/#">Register</a>
        </li>
        <li>
          <a href="/#">Search Results</a>
        </li>
      </ul>
    )
  };
}

export default HeaderNavigation;

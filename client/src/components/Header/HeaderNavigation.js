import React from 'react';


class HeaderNavigation extends React.Component {
  render(){
    return(
      <ul>
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

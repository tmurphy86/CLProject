import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton.js'


class HeaderNavigation extends React.Component {
  render(){
    return(
      <ul className="Header-navigation">
        <li>
          <a href="/region/forsale/category/post/2">test post page</a>
        </li>
        <li>
          <a href="/#">Login</a>
        </li>
        <li>
          <a href="/#">Register</a>
        </li>
        <li>
          <PrimaryButton href="/">post an ad</PrimaryButton>
        </li>
      </ul>
    )
  };
}

export default HeaderNavigation;

import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton.js'


class HeaderNavigation extends React.Component {
  render(){
    return(
      <ul className="Header-navigation">
        <li>
          <a href="/r/region/d/forsale/c/category/post/2">Post 2</a>
        </li>
        <li>
          <a href="/r/region/d/forsale/c/category/post/3">Post 3</a>
        </li>
        <li>
          <a href="/#">Login</a>
        </li>
        <li>
          <a href="/#">Register</a>
        </li>
        <li>
          <PrimaryButton href="/newpost">post an ad</PrimaryButton>
        </li>
      </ul>
    )
  };
}

export default HeaderNavigation;

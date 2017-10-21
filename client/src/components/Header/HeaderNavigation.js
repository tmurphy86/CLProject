import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton.js'
import Auth from '../../modules/Auth';


class HeaderNavigation extends React.Component {
  render(){
    return(
      <ul className="Header-navigation">
        {(() => {
          if(!Auth.isUserAuthenticated()){
            return (
              <span>
                <li>
                  <a href="/login">Login</a>
                </li>
                <li>
                  <a href="/signup">Register</a>
                </li>
              </span>
            )
          } else {
            return (
              <span>
                <li>
                  <a href="/logout">Logout</a>
                </li>
                <li>
                  <a href="/dashboard">My Dahsboard</a>
                </li>
              </span>
            )
          }
        })()}
        <li>
          <PrimaryButton href="/newpost">post an ad</PrimaryButton>
        </li>
      </ul>
    )
  };
}

export default HeaderNavigation;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Auth from '../../modules/Auth';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <NavLink to="/">CraigsList2.0</NavLink>
      </div>

      <div className="top-bar-right">
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </div>

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;

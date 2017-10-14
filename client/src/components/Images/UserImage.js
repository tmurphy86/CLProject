import React from 'react';
import './Images.css';

const UserImage = (props) => {
  return (
    <img src={props.src} alt={props.alt} className="userImage img-responsive"/>
  )
}

export default UserImage;

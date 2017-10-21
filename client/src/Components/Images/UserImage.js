import React from 'react';
import './Images.css';

const UserImage = (props) => {
  return (
    <div className="userImage img-responsive" style={{background:props.color}}>
      {props.initial}
    </div>
  )
}

export default UserImage;

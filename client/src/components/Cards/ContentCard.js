import React from 'react';
import './Cards.css';

const ContentCard = (props) => {
  return (
    <div className="ContentCard">
        {props.children}
    </div>
  )
}

export default ContentCard;

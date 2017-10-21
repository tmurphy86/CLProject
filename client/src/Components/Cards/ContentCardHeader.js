import React from 'react';
import './Cards.css';

const ContentCardHeader = (props) => {
  return (
    <div className="ContentCardHeader">
        {props.children}
    </div>
  )
}

export default ContentCardHeader;

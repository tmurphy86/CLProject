import React from 'react';
import './Cards.css';

const ContentCardBody = (props) => {
  return (
    <div className="ContentCardBody">
        {props.children}
    </div>
  )
}

export default ContentCardBody;

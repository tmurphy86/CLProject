import React from 'react';
import './Buttons.css';

const SidebarButton = (props) => {
  return (
    <a href={props.href} className='clButton SidebarButton bold-text'>{props.children}</a>
  )
}

export default SidebarButton;

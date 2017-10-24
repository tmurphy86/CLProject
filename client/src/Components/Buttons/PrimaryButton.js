import React from 'react'
import './Buttons.css'

const PrimaryButton = (props) => {
  return (
    <a href={props.href} className='clButton PrimaryButton bold-text'>{props.children}</a>
  )
}

export default PrimaryButton

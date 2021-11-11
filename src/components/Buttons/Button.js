import React from 'react';
import './Buttons.css';

const Buttons = ({ text, active, sm, lg, xs, xl, children: icon, icon2 }) => {
  return (
    <div className='button-container'>
      {
        icon ? 
          <button className='btn-flex button'>
            <div className={xs ? 'btn-flex xs-btn': sm ? 'btn-flex sm-btn' : lg ? 'btn-flex lg-btn' : 'btn-flex'}>
              {icon}
              {icon2 ? <div>{icon2}</div> : text ? <p className='btn-text'>{text}</p> : ''} 
            </div>
          </button>
        : <button className={active && xl ? 'button active xl-btn' : active && sm ? 'button active sm-btn' : xl ? 'button xl-btn' : xs ? 'button xs-btn' : sm ? 'button sm-btn' : 'button lg-btn'}>{text}</button>
      }
    </div>
  )
}

export default Buttons;
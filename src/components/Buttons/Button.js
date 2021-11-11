import React from 'react';
import './Buttons.css';

const Buttons = ({ text, icon }) => {
  return (
    <div className='button-container'>
      {
        icon ? 
          <button className='btn-flex button'>
            <div>
              icon
            </div>
            Disconnected
          </button>
        : <button className='button'>Disconnect</button>
      }
    </div>
  )
}

export default Buttons;
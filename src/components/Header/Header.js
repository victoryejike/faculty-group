import React from 'react';
import Buttons from '../Buttons/Button';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='header'>
        <Buttons/>
        <div className='header-subgrid'>
          <Buttons/>
          <Buttons/>
        </div>
        
      </div>
    </>
  )
}

export default Header;
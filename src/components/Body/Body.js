import React from 'react';
import Cards from '../Cards/Card';
import './Body.css';

const Body = () => {
  return (
    <>
      <div className='body'>
        <Cards/>
        <Cards inactive/>
        <Cards inactive/>
        <Cards inactive/>
        <Cards inactive/>
        <Cards/>
      </div>
    </>
  )
}

export default Body;
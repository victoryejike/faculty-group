import React from 'react';
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import './Main.css';

const Main = () => {
  return (
    <>
      <div className='main'>
      <Header/>
      <div className='main-text'>
        <small>MLP Marketplace</small>
        <h1>Live Mutual LIQUIDITY Pools</h1>
      </div>
        <Body/>
      </div>
    </>
  )
}

export default Main;
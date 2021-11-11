import React from 'react';
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import Footer from '../../components/Footer/Footer';
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
        <Footer />
      </div>
    </>
  )
}

export default Main;
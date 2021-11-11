import React from 'react';
import Buttons from '../Buttons/Button';
import Separator from '../../assets/img/Line 45.png';
import Subtract from '../../assets/img/Subtract.png';
import Ethereum from '../../assets/img/Union.png';
import './Card.css';

const Cards = () => {
  return (
    <div className='card-container'>
      <div className='flex liquidity'>
        <div>
          <img src={Subtract} alt='POP' />
        </div>
        <div className='token-pairs flex'>
          <p>POP!</p> 
          <div>
            <img src={Separator} alt='separator'/>
          </div> 
          <p>ETH</p>
        </div>
        <div>
          <img src={Ethereum} alt='ethereum' />
        </div>
      </div>
      <div className='flex APY'>
        <p>APY 334%</p>
        <p>APR 100%</p>
      </div>
      <div className='pool'>
        <div className='flex pool-details'>
          <p>Total Pool Size</p>
          <p>$200,000,000</p> 
        </div>
        <div className='flex pool-details'>
          <p>Total Pool Size</p>
          <p>$200,000,000</p>
        </div>
        <div className='flex pool-details'>
          <p>Total Pool Size</p>
          <p>$200,000,000</p>
        </div>
        <div className='flex pool-details'>
          <p>Total Pool Size</p>
          <p>$200,000,000</p>
        </div>
        <div>
          <p>Farmed POP</p>
          <progress id="file" value="900" max="1000"> 32% </progress>
        </div>
        <div>
          <Buttons text='Single sided Offer'/>
          <Buttons text='Farm'/>
        </div>
      </div>
    </div>
  )
}

export default Cards;
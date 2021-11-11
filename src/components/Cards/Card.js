import React from 'react';
import Buttons from '../Buttons/Button';
import Subtract from '../../assets/img/Subtract.png';
import Ethereum from '../../assets/img/Union.png';
import B from '../../assets/img/b.png';
import './Card.css';

const Cards = ({ inactive }) => {
  return (
    <div className={inactive ? 'card-container card-container--inactive' : 'card-container'}>
      <div className='flex liquidity'>
        <div>
          {
            inactive ? <img src={B} alt='B' />
            : <img src={Subtract} alt='POP' />
          }
        </div>
        <div className={inactive ? 'token-pairs token-pairs--inactive flex' : 'token-pairs flex'}>
          <p>POP!</p>  
          <p>ETH</p>
        </div>
        <div>
          <img src={Ethereum} alt='ethereum' />
        </div>
      </div>
      <div className={inactive ? 'flex APY APY--inactive': 'flex APY'}>
        <p>APY 334%</p>
        <p>APR 100%</p>
      </div>
      <div className={inactive ? 'pool pool--inactive' : 'pool'}>
        <div className='flex pool-details'>
          <p>Total Pool Size</p>
          <p>$200,000,000</p> 
        </div>
        <div className='flex pool-details'>
          <p>Total Value Offered</p>
          <p>$125,846,891</p>
        </div>
        <div className='flex pool-details'>
          <p>Total Volume Matched</p>
          <p>$ 60,482</p>
        </div>
        <div className='flex pool-details'>
          <p>Time Remaining</p>
          <p>90 days</p>
        </div>
        <div className='flex farm'>
          <p>Farmed POP</p>
          <progress className={inactive? "progress--inactive" : 'progress'} value="900" max="1000"></progress>
          <p className='progress-value'>900/1000</p>
        </div>
        <div className='flex btn-group'>
        {
          inactive ? (
            <>
              <Buttons text='Single sided Offer' xl />
              <Buttons text='Farm' sm/>
            </>
          ) : (
            <>
              <Buttons text='Single sided Offer' active xl />
              <Buttons text='Farm' active sm/>
            </>
          )
        }
          
        </div>
      </div>
    </div>
  )
}

export default Cards;
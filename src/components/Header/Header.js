import React from 'react';
import Buttons from '../Buttons/Button';
import EthNetwork from '../../assets/img/Group 316.svg'
import DropDown from '../../assets/img/Rectangle 485.png'
import Uniswap from '../../assets/img/Group 81.png'
import Wallet from '../../assets/img/Marketplace 4.png'
import './Header.css';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='flex change-network'>
          <p>Network:</p>
          <Buttons sm>
            <img src={EthNetwork} alt='eth'/>
            <img src={DropDown} alt='dropdown'/>
          </Buttons>
        </div>
        <div className='flex'>
          <div className='flex header-subgrid'>
            &nbsp;
             <Buttons text='Swap tokens' lg>
              <img src={Uniswap} alt='uniswap'/>
            </Buttons>
            &nbsp;
          </div>
          <div className='flex wallet'>
            <div>
              <img src={Wallet} alt='wallet'/>
            </div>
            <p>0x47gdft61...8903</p>
            <Buttons text='Disconnect'/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Header;
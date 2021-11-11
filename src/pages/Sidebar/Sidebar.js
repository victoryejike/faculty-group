import React from 'react';
import './Sidebar.css';
import Logo from '../../assets/img/logo.png'
import Marketplace1 from '../../assets/img/Marketplaceaassd 1.png'
import Marketplace3 from '../../assets/img/Marketplace 3.png'
import Marketplace from '../../assets/img/Marketplace 2.png'
import Line from '../../assets/img/Line 47.png'
import Medium from '../../assets/img/Vector-1.png'
import Twitter from '../../assets/img/Vector1.png'
import Telegram from '../../assets/img/Vectorss.png'

const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-menu'>
          <div className='logo'>
            <img src={Logo} alt='logo'/>
          </div>
          <div>
            <img src={Marketplace3} alt='Marketplace3'/>
          </div>
          <div>
            <img src={Marketplace} alt='Marketplace'/>
          </div>
          <div>
            <img src={Line} alt='Line'/>
          </div>
          <div>
            <img src={Marketplace1} alt='Marketplace1'/>
          </div>
        </div>
        <div className='socials'>
          <div>
            <img src={Telegram} alt='Telegram'/>
          </div>
          <div>
            <img src={Twitter} alt='Twitter'/>
          </div>
          <div>
            <img src={Medium} alt='Medium'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
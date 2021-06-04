import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import styles from './Navbar.module.css'

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#2D62ED' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars' style={{marginLeft: '2%'}}>
            <FaIcons.FaBars onClick={showSidebar} value={{ color: '#2D62ED' }} />
          </Link>
          <strong className={styles.nav}><p style={{marginLeft: '8%', marginTop: '1%', marginBottom: '1%', fontSize: '1.8rem'}}><span style={{borderTopColor: "#2D62ED", borderTop: '10px solid #2D62ED', borderRadius: '10px'}}>{props.prefix}</span>{props.suffix}</p></strong>
        </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar} style={{marginLeft: '0', paddingLeft: '0'}}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

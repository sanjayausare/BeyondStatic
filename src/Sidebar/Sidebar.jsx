import { slide as Menu } from 'react-burger-menu'
import './Sidebar.css'
import React from 'react'

export default function Sidebar() {
    return (
            <Menu customBurgerIcon={ <img src="./images/hamburger.svg" className="img img-fluid" width="30px" alt="burger" style={{display: 'inline-block'}}/>}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    )
}

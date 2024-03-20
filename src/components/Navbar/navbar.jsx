import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopmenu">
                <Link className="listMenuItemList">Home</Link>
                <Link className="listMenuItemList">Clients</Link>
                <Link className="listMenuItemList">Portfolio</Link>
                <Link className="listMenuItemList">About</Link>
            </div>
            <button className="desktopmenubtn">
                <img src={contactImg} alt="contactImg" className="desktopmenuimg" />Contact Me
            </button>
        </nav>
    )
}

export default Navbar
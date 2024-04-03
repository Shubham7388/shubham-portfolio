import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
    const [showMenu , setShowmenu]= useState(false);
  return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo' />
            <div className="desktopmenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listMenuItemList">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listMenuItemList">Clients</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listMenuItemList">Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listMenuItemList">About</Link>
            </div>
            <button className="desktopmenubtn" onClick={()=> {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="contactImg" className="desktopmenuimg" />Contact Me
            </button>
            <img src={menu} alt="menu" className='mobMenu' onClick={()=> setShowmenu(!showMenu)} />
            <div className="navMenu" style={{display : showMenu ? 'flex' : 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="MenuItemList" onClick={()=>setShowmenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="MenuItemList" onClick={()=>setShowmenu(false)}>Clients</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="MenuItemList" onClick={()=>setShowmenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="MenuItemList" onClick={()=>setShowmenu(false)}>About</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="MenuItemList" onClick={()=>setShowmenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar
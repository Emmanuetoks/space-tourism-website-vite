import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const toggleMenu = ()=>{
    let closeIcon = document.getElementById('close')
    let hamIcon = document.getElementById('ham');
    let navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('nav__menu--mob-display');
    closeIcon.classList.toggle('nav_icon-close--show');
    hamIcon.classList.toggle('nav_icon-hamburger--hide')
  }

  return (
    <nav id='navBar' className='nav navbar flex navbar--header'>
        <img className='nav__logo' src='/data/images/assets/shared/logo.svg'/>
        <a onClick={toggleMenu} href='#' className='nav_icon'>
          <img id='ham' className='nav_icon-hamburger' src='/data/images/assets/shared/icon-hamburger.svg'/>
          <img id='close' className='nav_icon-close' src='/data/images/assets/shared/icon-close.svg'/>
        </a>
        <ul id='navMenu' className='nav__menu flex pos-rel ff-barlow '>
          <li className='nav__list-item pos-rel'>
            <NavLink to={'/'} className={'uppercase nav__link flex pos-rel'}>
                <b>00 </b> Home
            </NavLink>
          </li>
          <li className='nav__list-item pos-rel'>
            <NavLink to={'/destination'}  className={'uppercase nav__link flex pos-rel'}>
              <b>01 </b>Destination
            </NavLink>
          </li>
          <li className='nav__list-item pos-rel'>
            <NavLink to={'/crew'} className={'uppercase nav__link flex pos-rel'}>
              <b>02 </b> Crew
            </NavLink>
          </li>
          <li className='nav__list-item pos-rel'>
            <NavLink to={'/technology'} className={'uppercase nav__link flex pos-rel'}>
              <b>03 </b>Technology
            </NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
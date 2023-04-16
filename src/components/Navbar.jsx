import React from 'react'

const Navbar = () => {

  let shouldDisplay = 'false';

  const toggleMenu = ()=>{
    let navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('nav__menu--mob-display');
    console.log(navMenu.getAttribute('display'));
  }


  return (
    <nav id='navBar' className='nav flex'>
        <img className='nav__logo' src='data/images/assets/shared/logo.svg'/>
        <a onClick={toggleMenu} href='#' className='nav__hamburger'>
          <img src='/data/images/assets/shared/icon-hamburger.svg'/>
        </a>
        <ul id='navMenu' display={shouldDisplay} className='nav__menu flex pos-rel ff-barlow '>
          <li className='nav__list-item flex pos-rel'>
            <a href='#' className='nav__link pos-rel'>
                <b>00 </b> Home
            </a>
          </li>
          <li className='nav__list-item flex pos-rel'>
            <a href='#' className='nav__link pos-rel'>
              <b>01 </b>Destination
            </a>
          </li>
          <li className='nav__list-item flex pos-rel' >
            <a href='#' className='nav__link pos-rel'>
              <b>02 </b> Crew
            </a>
          </li>
          <li className='nav__list-item flex pos-rel'>
            <a href='#' className='nav__link pos-rel'>
              <b>03 </b>Technology
            </a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
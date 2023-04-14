import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav flex-item'>
        <img className='nav__logo' src='data/images/assets/shared/logo.svg'/>
        <ul className='nav__menu flex-item pos-rel ff-barlow '>
          <li className='nav__list-item'>
            <a href='#' className='nav__link pos-rel'>
                <b>00 </b> Home
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='#' className='nav__link pos-rel'>
              <b>01 </b>Destination
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='#' className='nav__link pos-rel'>
              <b>02 </b> Crew
            </a>
          </li>
          <li className='nav__list-item'>
            <a href='#' className='nav__link pos-rel'>
              <b>03 </b>Technology
            </a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
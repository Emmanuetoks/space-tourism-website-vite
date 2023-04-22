import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarDestination = () => {
    return (
        <nav className='nav flex ff-barlow navbar--destination'>
            <ul className='nav__menu flex '>
                <li className='nav__list-item pos-rel uppercase'>
                    <NavLink to={'/destination/1'} className={'nav__link flex'}>
                        Moon
                    </NavLink>
                </li>
                <li className='nav__list-item pos-rel  uppercase'>
                    <NavLink to={'/destination/2'} className={'nav__link flex'}>
                        mars
                    </NavLink>
                </li>
                <li className='nav__list-item pos-rel  uppercase'>
                    <NavLink to={'/destination/3'} className={'nav__link flex'}>
                        europa
                    </NavLink>
                </li>

                <li className='nav__list-item pos-rel  uppercase'>
                    <NavLink to={'/destination/4'} className={'nav__link flex'}>
                        titan
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarDestination
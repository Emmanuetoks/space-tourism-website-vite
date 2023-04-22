import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarCrew = () => {
    return (
        <nav className='nav navbar--crew flex'>
            <NavLink to={'/crew/1'} className={'nav__link--crew'}></NavLink>
            <NavLink to={'/crew/2'} className={'nav__link--crew'}></NavLink>
            <NavLink to={'/crew/3'} className={'nav__link--crew'}></NavLink>
            <NavLink to={'/crew/4'} className={'nav__link--crew'}></NavLink>
        </nav>
    )
}

export default NavbarCrew
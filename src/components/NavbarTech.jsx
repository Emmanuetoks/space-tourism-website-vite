import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarTech = () => {
    return (
        <nav className='nav navbar--tech flex'>
            <NavLink to={'/technology/1'} className={'nav__link-tech'}>
                <h5 className='subheading-1'>
                    1
                </h5>
            </NavLink>
            <NavLink to={'/technology/2'} className={'nav__link-tech'}>
                <h5 className='subheading-1'>
                    2
                </h5>
            </NavLink>
            <NavLink to={'/technology/3'} className={'nav__link-tech'}>
                <h5 className='subheading-1'>
                    3
                </h5>
            </NavLink>
        </nav>
    )
}

export default NavbarTech
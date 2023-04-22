import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    React.useEffect(
        () => {
            let root = document.getElementById('root')
            root.addEventListener('click', () => {
                let navMenu = document.getElementById('navMenu')
                if (navMenu.classList.contains('nav__menu--mob-display')) {
                    // console.log('Badoo');
                    // navMenu.classList.remove('nav__menu--mob-display')
                }
            })
        }, []
    )
    return (
        <>
            <Outlet />
        </>
    )
}

export default RootLayout
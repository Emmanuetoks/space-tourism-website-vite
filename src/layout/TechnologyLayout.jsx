import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Technology from '../pages/Technology'

const TechnologyLayout = () => {
  return (
    <div className='flex bg bg--technology'>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default TechnologyLayout

export const technologyLoader = async() => {
  let res = await fetch('/data/data.json');
  let data = await res.json();

  return data.technology
}
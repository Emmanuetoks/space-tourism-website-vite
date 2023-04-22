import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const CrewLayout = () => {
  return (
    <div className='flex bg bg--crew'>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default CrewLayout

export const crewData = async()=>{
  let res = await fetch('/data/data.json');

  let data = await res.json()

  return data.crew

}
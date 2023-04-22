import React from 'react'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import Destination from '../pages/Destination'
import Navbar from '../components/Navbar'

const DestinationLayout = () => {
  const destinations = useLoaderData();

  return (
    <div className='flex bg bg--destination'>
      <header>
        <Navbar />
      </header>
      {/* <h2 className=''>02 pick your destination</h2> */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

// When user clicks on the destination link, each link links to a particular parameter which we will catch in the /destination route and pass the parameter as a prop into the element and a loader which gets the api data whenever we click on the link, then we will catch the loaderData as a variable in our app component and render name and picture of the destination ata particular index

export default DestinationLayout

export const destinationLoader = async () => {
  const res = await fetch('/data/data.json');

  const apiData = await res.json();

  // console.log(apiData.destinations);

  return apiData.destinations
}



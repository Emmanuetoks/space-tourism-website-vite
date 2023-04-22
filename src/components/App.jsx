import React from 'react'
import Home from '../pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from '../layout/RootLayout';
import DestinationLayout from '../layout/DestinationLayout';
import TechnologyLayout from '../layout/TechnologyLayout';
import CrewLayout, { crewData } from '../layout/CrewLayout';
import Destination from '../pages/Destination';
import { destinationLoader } from '../layout/DestinationLayout';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';
import { technologyLoader } from '../layout/TechnologyLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='destination' element={<DestinationLayout />}>
                <Route
                    index
                    element={<Destination />}
                    loader={destinationLoader}

                />

                <Route
                    path=':id'
                    element={<Destination />}
                    loader={destinationLoader}
                />
                <Route path='titan' />
                <Route path='europa' />
                <Route path='venus' />
            </Route>
            <Route path='crew' element={<CrewLayout />}>
                <Route 
                    index
                    element = {<Crew/>}
                    loader={crewData}
                />
                <Route
                    path=':id'
                    element = {<Crew/>}
                    loader={crewData}
                />
            </Route>
            <Route path='/technology' element={<TechnologyLayout />}>
                <Route
                    index
                    element = {<Technology/>}
                    loader={technologyLoader}
                />

                <Route
                    path=':id'
                    element = {<Technology/>}
                    loader={technologyLoader}
                />
            </Route>
        </Route>
    )
);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
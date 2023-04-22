import React from 'react';
import NavbarDestination from '../components/NavbarDestination'
import { useLoaderData, useParams } from 'react-router-dom';

const Destination = () => {
    const destination = useLoaderData();
    const {id} = useParams()
    const index = Number(id) - 1
    return (
        <div className='destination-card'>
            <figure className='grid destination-card__figure'>
                <img className='destination-card__figure-image' src={id != undefined ? destination[index].images.png : destination[0].images.png} />
                <div className='destination-card__figure-text flex'>
                    <NavbarDestination />
                    <article>
                        <figcaption>
                            <h2 className='uppercase'>
                                 {id != undefined ?  destination[index].name : destination[0].name}
                            </h2>
                        </figcaption>
                        <p>
                            {id != undefined ? destination[index].description : destination[0].description}
                        </p>
                    </article>
                    <hr />

                    <ul className='destination-card__figure-data flex uppercase'>
                        <li>
                            <h6 className='subheading-2'> Avg. distance</h6>
                            <h5 className='subheading-1'>{id != undefined ?  destination[index].distance : destination[0].distance}</h5>
                        </li>
                        <li>
                            <h6 className='subheading-2' >Est. travel time</h6>
                            <h5 className='subheading-1'>{id != undefined ? destination[index].travel : destination[0].travel}</h5>
                        </li>
                    </ul>


                </div>
            </figure>
        </div>

    )
}




export default Destination
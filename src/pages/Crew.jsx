import React from 'react';
import '../../crew.css';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import NavbarCrew from '../components/NavbarCrew';

const Crew = () => {
  let { id } = useParams();
  let index = Number(id) - 1
  let data = useLoaderData();
  
  return (
    <div className='crew-card'>
      <figure className='crew-card__fig grid'>
        <figcaption className='flex crew-card__figcap'>
          <article>
            <h4 className='uppercase'>{id != undefined ? data[index].role : data[0].role}</h4>
            <h3 className='uppercase'>{id != undefined ? data[index].name : data[0].name}</h3>
            <p>
              {id != undefined ? data[index].bio : data[0].bio}
            </p>
          </article>
          <NavbarCrew/>
        </figcaption>

        <img className='crew-card__fig-image' src={id != undefined ? data[index].images.png : data[0].images.png} />
      </figure>
    </div>
  )
}

export default Crew
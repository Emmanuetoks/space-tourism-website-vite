import React from 'react'
import '../../technology.css';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';
import NavbarTech from '../components/NavbarTech';

const Technology = () => {
    let { id } = useParams();
    let index = Number(id) - 1
    let techData = useLoaderData();

    return (
        <div className='technology-card'>
            <figure className='technology-card__figure grid'>
                <figcaption className='technology-card__figcap flex'>
                    <NavbarTech />
                    <article className='technology-card__figcap-article'>
                        <h3 className='uppercase technology-card__big-heading'>{id != undefined ? techData[index].name : techData[0].name}</h3>
                        <p>
                            {id != undefined ? techData[index].description : techData[0].description}
                        </p>
                    </article>

                </figcaption>

                <picture>
                    <source
                        media='(max-width:1024px)'
                        srcSet={id != undefined ? techData[index].images.landscape : techData[0].images.landscape} />

                    <img src={id != undefined ? techData[index].images.portrait : techData[0].images.portrait} />
                </picture>
                <div />
            </figure>
        </div>
    )
}

export default Technology
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../../home.css';

const Home = () => {
  return (
    <div className='bg bg--home flex'>
      <header>
        <Navbar />
      </header>
      <main className='main-content--home flex'>
        <section className='main-content--home__intro-text'>
          <article>
            <h5 className='uppercase'>So, you want to travel to</h5>
            <h1 className='uppercase'>space</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </article>

        </section>

        <section className='main-content--home__button-section flex'>
          <Link to={'/destination'}>
            <div className='main-content--home__button'>explore</div>
          </Link>
        </section>
      </main>
    </div>
  )
}
export default Home
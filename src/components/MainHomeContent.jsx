import React from 'react';

const MainHomeContent = () => {
    return (
        <main className='main-content flex'>
            <section className='main-content__intro-text'>
                <h5 className='main-content__heading main-content__small-heading'>So you want to travel to</h5>
                <h1 className='main-content__heading main-content__big-heading'>space</h1>
                <article className='main-content__article'>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </article>
            </section>

            <section className='main-content__button-section flex'>
                <button className='main-content__button'>explore</button>
            </section>
        </main>
    )
}

export default MainHomeContent
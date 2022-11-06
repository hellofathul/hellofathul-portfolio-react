import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <container className="portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/" className='btn' target='_blank'>GitHub</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </container>
    </section>
  )
}

export default Portfolio
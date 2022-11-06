import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Student Induction Week (MINDS) Universiti Malaysia Pahang</h3>
          <div className="portfolio__item-cta">
            <a href="https://dribbble.com/hellofathul" className='btn' target='_blank'>Dribbble</a>
            <a href="https://www.instagram.com/mindsump_2223/" className='btn btn-primary' target='_blank'>MINDS Instagram</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
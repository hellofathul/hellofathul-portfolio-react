import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Student Induction Week (MINDS) Universiti Malaysia Pahang',
    link: 'https://www.instagram.com/mindsump_2223/',
    demo: 'https://dribbble.com/hellofathul',
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, link, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={link} className='btn' target='_blank'>Demo</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>MINDS Instagram</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Student Induction Week (MINDS) Universiti Malaysia Pahang',
    link: 'https://www.instagram.com/mindsump_2223/',
    demo: 'https://dribbble.com/hellofathul',
  },
  {
    id: 2,
    image: IMG2,
    title: 'My Portfolio using ReactJS',
    link: 'https://github.com/hellofathul/hellofathul-portfolio-react',
    demo: 'https://www.hellofathul.com',
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
                  <a href={link} className='btn' target='_blank'>Resources</a>
                  <a href={demo} className='btn btn-primary' targ et='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt='Portfolio Image' />
          </div>
          <h3 className='ongoing__project'> [ONGOING PROJECT]</h3><h3 className='e-petakom'>Persatuan Teknologi Komputer <br />(e-PETAKOM) Management and Election System</h3>
          <div className="portfolio__item-cta">
            <a href='https://github.com/hellofathul/e-petakom' className='btn' target='_blank'>Resources</a>
            <a href="https://epetakom.hellofathul.com" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
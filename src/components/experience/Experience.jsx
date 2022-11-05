import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Stack</h2>

      <div className="container experience__container">
        <div className="experience__web">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML & CSS</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>PHP</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Laravel</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MySQL</h4>
            </article>
          </div>
        </div>
        {/* END OF WEB DEVELOPMENT */}
        <div className="experience__mobile">
          <h3>Mobile Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Flutter</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>Firebase</h4>
              <small>Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
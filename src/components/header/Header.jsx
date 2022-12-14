import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Fathul Amin</h1>
        <h5 className="text-light">Fresh Graduate Software Engineer</h5>
        <h5 className="text-light2">Graphic Designer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="ME" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
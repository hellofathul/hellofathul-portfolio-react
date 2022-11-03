import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import './header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/hellofathul/" target="_blank"><BsLinkedin size={'2em'}/></a>
      <a href="https://github.com/hellofathul" target="_blank"><FaGithub size={'2em'}/></a>
      <a href="https://www.facebook.com/hellofathul/" target="_blank"><FaFacebookSquare size={'2em'}/></a>
    </div>
  )
}

export default HeaderSocials
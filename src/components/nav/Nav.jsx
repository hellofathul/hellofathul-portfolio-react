import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalCheck} from 'react-icons/bs'
import {BsBriefcase} from 'react-icons/bs'
import {TbMessageDots} from 'react-icons/tb'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BsJournalCheck/></a>
      <a href="#portfolio"><BsBriefcase/></a>
      <a href="#contact"><TbMessageDots/></a>
    </nav>
  )
}

export default Nav
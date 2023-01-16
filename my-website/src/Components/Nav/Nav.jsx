import React from 'react'
import './Nav.css';
import { GoHome } from 'react-icons/go'
import { TbUser } from 'react-icons/tb'
import { BsBookHalf } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import before from '../../Images/before.jpg'
import after from '../../Images/after.jpg'
import { useState } from 'react';

const Nav = () => {

  const [ActiveNav, setActiveNav] = useState('#Header');

  const [themeImg, setthemeImg] = useState(before);

  const toggleMode = () => {
    if (themeImg === after) {
      setthemeImg(before);
    }
    else {
      setthemeImg(after);
    }
  }

  return (
    <nav>
      <a href='#Header' onClick={() => setActiveNav('#Header')} className={ActiveNav === '#Header' ? 'active' : ''}> <GoHome size={25} /></a>
      <a href='#About' onClick={() => setActiveNav('#About')} className={ActiveNav === '#About' ? 'active' : ''}> <TbUser size={25}/></a>
      <a href='#Experience' onClick={() => setActiveNav('#Experience')} className={ActiveNav === '#Experience' ? 'active' : ''}><BsBookHalf size={25}/></a>
      <a href='#Contact' onClick={() => setActiveNav('#Contact')} className={ActiveNav === '#Contact' ? 'active' : ''}> <FiPhone size={25} /></a>
      <img id='smalljpg' src={themeImg} alt='Sad/Happy Jeanne' onClick={toggleMode}/>
    </nav>
  )
}

export default Nav
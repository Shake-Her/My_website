import React from 'react'
import './Header.css';
import Night from '../../Images/Night.jpg'
import Day from '../../Images/Day.jpg'
import Resume from '../../Extras/Resume.pdf'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrGithub} from 'react-icons/gr'
import {SiMyanimelist} from 'react-icons/si'
import { SiYoutube } from 'react-icons/si'

import {useEffect, useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [curImg, setcurImg] = useState(Night);

  const toggleMode = () => {
      isDarkMode === true ? setIsDarkMode(false) : setIsDarkMode(true); 
  }

    useEffect(() => {  
      if (isDarkMode) {
        document.body.className = 'dark_theme';
        setcurImg(Night)
      }
      else {
        document.body.className = 'pink_theme';
        setcurImg(Day)
      }
    }, [isDarkMode]);
  
  return (
    <header className='headerSection' id='Header'>

      <div className='Introduction'>

        <h2>Shekhar Mehta</h2>
        <h4>Full Stack Developer</h4>
        <img id='imageCard' src={curImg} alt='Cute Jeanne' />
        <h6>@Shake-Her</h6>
      </div>

      <div id='resumeContact'>
        <a href={Resume} download>Resume</a>
        <a href='#Contact'>Contact</a>
      </div>

      <div className='toggle'>
      <DarkModeToggle
      onChange={toggleMode}
      checked={isDarkMode}
          size={85}
          speed={1.3}
      />
      </div>

      <div id='socials'>
        <a href='https://www.linkedin.com/in/shake-her/' target="_blank" rel="noreferrer"><IoLogoLinkedin size={25}/></a>
        <a href='https://twitter.com/Shake_herrr' target="_blank" rel="noreferrer"><AiOutlineTwitter size={25}/></a>
        <a href='https://github.com/Shake-Her' target="_blank" rel="noreferrer"><GrGithub size={25}/></a>
        <a href='https://myanimelist.net/profile/Shake-Her' target="_blank" rel="noreferrer"><SiMyanimelist size={25}/></a>
        <a href='https://www.youtube.com/channel/UCHwx8HDdXAr1ND-K9gEWkHg' target="_blank" rel="noreferrer"><SiYoutube size={25}/></a>
      </div>
      
      <p id='scroll'>--Scroll Down--</p>
    </header>
  )
}

export default Header
import React from 'react'
import './Footer.css';
import {IoLogoLinkedin} from 'react-icons/io'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrGithub} from 'react-icons/gr'
import {SiMyanimelist} from 'react-icons/si'
import { SiYoutube } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>

      <div id='footSocial'>
        <a href='https://www.linkedin.com/in/shake-her/' target="_blank" rel="noreferrer"><IoLogoLinkedin size={50}/></a>
        <a href='https://twitter.com/Shake_herrr' target="_blank" rel="noreferrer"><AiOutlineTwitter size={50}/></a>
        <a href='https://github.com/Shake-Her' target="_blank" rel="noreferrer"><GrGithub size={50}/></a>
        <a href='https://myanimelist.net/profile/Shake-Her' target="_blank" rel="noreferrer"><SiMyanimelist size={50}/></a>
        <a href='https://www.youtube.com/channel/UCHwx8HDdXAr1ND-K9gEWkHg' target="_blank" rel="noreferrer"><SiYoutube size={50}/></a>
      </div>

    </footer>
  )
}

export default Footer
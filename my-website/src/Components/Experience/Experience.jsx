import React from 'react'
import './Experience.css'
// FrontEnd Icons
import { ImHtmlFive } from 'react-icons/im'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'

// BackEnd Icons
import {IoLogoNodejs } from 'react-icons/io'
import {SiCplusplus } from 'react-icons/si'
import { SiMysql} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import { SiPython } from 'react-icons/si'

//coding profile
import { SiLeetcode } from 'react-icons/si'
import { SiGeeksforgeeks } from 'react-icons/si'
import { SiCodeforces } from 'react-icons/si'
import {SiCodingninjas} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='Experience'>

      <div id='headtitle'>
      <h5>What work I have done and skills I have?</h5>
        <h2>Experience/Skills</h2>
      </div>

      <div className='skillsCard'>

        <h3>Frontend Development</h3>
        <div className='devCards'>
          <span>
            <ImHtmlFive size={50} /></span>
          <span>
            <DiCss3 size={50} />
          </span>
          <span>
            <SiJavascript size={50} />
          </span>
          <span>
            <FaReact size={50} />
            </span>
          </div>

        <h3>Backend Development</h3>
        <div className='devCards'>
          <span>
            <IoLogoNodejs size={50} />
          </span>
          <span>
          <SiMysql size={50} />
          </span>
          <span>
          <SiExpress size={50} />
          </span>
          <span>
            <SiCplusplus size={50} />
          </span>
          <span>
          <SiMongodb size={50} />
          </span>
          <span>
            <SiPython size={50}/>
          </span>

        </div>
        
        <h3>Coding Profiles-(Links ☟)</h3>
        <div className='codingProfiles'>
          <a href="https://leetcode.com/Shake-Her/" target="_blank" rel="noreferrer"><SiLeetcode size={50}/></a>
          <a href="https://auth.geeksforgeeks.org/user/shakeher/practice" target="_blank" rel="noreferrer"> <SiGeeksforgeeks size={50}/></a>
          <a href="https://codeforces.com/profile/Shake-Her" target="_blank" rel="noreferrer"> <SiCodeforces size={50}/></a>
          <a href="https://www.codingninjas.com/codestudio/profile/ShakeHer" target="_blank" rel="noreferrer"><SiCodingninjas size={50}/></a>
        </div>
      </div>

      <div className='experience'>
        <h1>Experience</h1>
        <h5>Hey there! Currently, I'm looking for more internship opportunities. Please contact me if you have any work.</h5>
      </div>
    </section>
  )
}

export default Experience
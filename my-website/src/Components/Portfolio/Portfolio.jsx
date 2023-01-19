import React from 'react'
import './Portfolio.css';
import Projectcard from './Projectcard';
import charImg from '../../Images/ProjectImages/chatapp.jpg'
import zipper from '../../Images/ProjectImages/zipper.png'
import personalWeb from '../../Images/ProjectImages/personWebsite.jpg'
import leadTracker from '../../Images/ProjectImages/leadTracker.jpg'
import tapper from '../../Images/ProjectImages/tapper.png'
import weather from '../../Images/ProjectImages/weather app.png';

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <div className='projectTitle'>
        <h5>What projects do I have?</h5>
        <h2>Projects</h2>
      </div>
      <div className='portfolioCards'>
        
        <Projectcard
          image={charImg}
          projectname="ChatWithMe"
          vidlink="https://drive.google.com/file/d/1n2mnS36En073zLUCW3w33ZbbXZkpMUgJ/view?usp=sharing"
          gitlink="https://github.com/Shake-Her/Chat-With-Me"
        />

        <Projectcard
          image={personalWeb}
          projectname="Personal Website"
          vidlink="https://drive.google.com/file/d/1w9A-AWZtE3YjQupDa7TlChP6uzAAh5j2/view?usp=sharing"
          gitlink="https://github.com/Shake-Her/My_website"
        />

        <Projectcard
          image={zipper}
          projectname="Zipper"
          vidlink="https://drive.google.com/file/d/1rlP01Rzvvfb2Z-YgcxcNQ5RAvJF930mK/view?usp=sharing"
          gitlink="https://github.com/Shake-Her/Zipper"
        />

        <Projectcard
        image={weather}
        projectname="Weather-App"
        vidlink="https://drive.google.com/file/d/1wg6K9qTzoadTrmBjUSOXcSoCMfHMtryf/view?usp=sharing"
        gitlink="https://github.com/Shake-Her/Weather-App"
      />


        <Projectcard
          image={leadTracker}
          projectname="LeadTracker"
          vidlink="https://drive.google.com/file/d/1a1HQUnfiyDC0ZwCKSxG9mLpd_VpWaYol/view?usp=sharing"
          gitlink="https://github.com/Shake-Her/Lead-Tracker-Cool-Tabber-"
        />

        <Projectcard
          image={tapper}
          projectname="Tapper"
          vidlink="https://drive.google.com/file/d/17nT77tjOVXUfqeCYsb2RHDlZB7ivFNXY/view?usp=sharing"
          gitlink="https://github.com/Shake-Her/Score-Keeper"
        />

        
      </div>
    </section>
  )
}

export default Portfolio
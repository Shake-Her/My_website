import React from 'react'
import './About.css';
import aboutMe from '../../Images/Aboutme.jpg'
import { FaUserGraduate } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
import {SlGameController} from 'react-icons/sl'

const About = () => {
  return (
    <section id='About'>

    <div className='tempTitle'>
      <h5>Get to Know</h5>
      <h1>About Me</h1>
      </div>
      
    <div className='about_me'>
      <div className='about_me_content'>
        <img src={aboutMe} alt='aboutMePhoto'/>
        </div>

      <div className='about_me_cards'>
          <article className='about_cards'>
            <FaUserGraduate />
            <h4>Education</h4>
            <h5>2019-2023</h5>
            <h6>Bachelor of Engineering in Electronics and Telecommunication</h6>
          </article>
          
        <article className='about_cards'>
            <MdWork />
            <h4>Projects</h4>
            <h5>10+ Completed</h5>
            <h6>Zipper and ChatWithMe are my favourite projects.</h6>
          </article>
          
        <article className='about_cards'>
            <SlGameController />
            <h4>Hobbies</h4>
            <h5>Video Games and Anime</h5>
            <h6>Add me-@Shake-Her</h6>
          </article>
          
          <p className='aboutPara'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Molestiae est asperiores magnam. Tenetur inventore iste itaque nostrum nam praesentium!
            Ab exercitationem blanditiis vero autem modi facere omnis voluptatum enim repudiandae!
          </p>

        <a href="#Contact" className='btnTalk'>Contact Me!</a>
        </div>
      </div>
      
    </section>
  )
}

export default About
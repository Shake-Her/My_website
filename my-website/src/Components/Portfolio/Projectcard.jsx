import React from 'react'
import './Projectcard.css'

const Projectcard = (props) => {
  return (
    <div className='projectcards'>
          <img src={props.image} alt='projectImage' className='projectImage' />
          <h3>{props.projectname}</h3>
          <div className='projectlinks'>
            <a href={props.gitlink} target="_blank" rel="noreferrer">GitHub</a>
            <a href={props.vidlink} target="_blank" rel="noreferrer">Video</a>
        </div>
    </div>
  )
}

export default Projectcard

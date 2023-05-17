import React from 'react'
import './background.css'
import Img1 from '../../img/32.jpg'
import Img2 from '../../img/37.jpg'
import Img3 from '../../img/80.jpg'
import Img4 from '../../img/1000.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
function BackGround() {

  const Picture=
  [
    {
      img:{Img1}
    },
    {
      img:{Img2}

    },
    {
      img:{Img3}
    },
    {
      img:{Img4}
    },
  ]
  const [image,setImage]=useState(Picture)
  return (
    <div>
      <div className="bg">
        <div className="bgs">
            <h1>Amazing Place</h1>
          <Link to='/contact'><h4>Visit Sheka Zone</h4></Link>

            <p><Typewriter
               options={{
              strings: [`Sheka zone is well-known for its 
              production of white organic forest honey,
             spices, different wild animals and various 
            types of trees some with medicinal values. 
             Most of the indigenous communities are engaged 
              in producing honey from the forest.`],
              autoStart: true,
               loop: true,
              }}/></p>
        </div>
      </div>
    </div>
  )
}

export default BackGround

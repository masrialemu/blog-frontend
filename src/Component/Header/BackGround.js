import React, { useEffect } from 'react'
import './background.css'
import Img1 from '../../img/32.jpg'
import Img2 from '../../img/37.jpg'
import Img3 from '../../img/80.jpg'
import Img4 from '../../img/1000.jpg'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import axios from 'axios'

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

  const [load,setLoad]=useState(false)

  const [data1,setData1]=useState([])
  
  return (
    <div>
      <div className="bg" >
       
        <div className="bgs"style={{
          backgroundImage: `linear-gradient(rgba(4, 9, 30, 0.5), rgba(4, 9, 30, 0.7)), url(${Img4})`

        }}>
        <h1>Amazing Place</h1>
       <p>Sheka zone is well-known for its 
          production of white organic forest honey,
         spices, different wild animals and various 
        types of trees some with medicinal values. 
         Most of the indigenous communities are engaged 
          in producing honey from the forest.</p>
        <h1 className='h2'><Typewriter
           options={{
          strings: [`Sheka zone`,`forest`,`honey`,`wild animals`,` trees`],
          autoStart: true,
           loop: true,
          }}/></h1>
                <Link to='/contact'><h4>Visit Sheka Zone</h4></Link>

    </div>
       
      </div>
    </div>
  )
}

export default BackGround

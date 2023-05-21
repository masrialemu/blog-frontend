import React from 'react'
import {Link} from 'react-router-dom'
import './mid.css'
import Img from '../../img/80.jpg'
function Mid({title,pic,desc}) {
  let pics="http://localhost:5000/"
  return (
    <div>
      <div className="mid">
        <div className="mids">
            <img src={pics+pic} alt={pic} />
            <div className="lst">
                <h3>About us</h3>
                <h1>{title}</h1>
                <p>
               {desc}
                </p>
                
                <div className="btn">
                <button><Link to={'/contact'}><h4>Let's contact</h4></Link></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mid

import React from 'react'
import {Link} from 'react-router-dom'
import './mid.css'

import Img from '../../img/80.jpg'
function Mid() {
  return (
    <div>
      <div className="mid">
        <div className="mids">
            <img src={Img} alt="image" />
            <div className="lst">
                <h3>About us</h3>
                <h1>Sheka Zone</h1>
                <p>Sheka zone is well-known for its production of white organic forest honey, 
                    spices, different wild animals and various types of trees some with medicinal values. Most of the 
                    indigenous communities are engaged in producing honey from the forest.
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

import React, { useContext, useEffect, useState } from 'react'
import './top.css'
import Img from '../../img/80.jpg';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';
import axios from 'axios';

function Top() {
  const {user}=useContext(Context)
  const [load,setLoad]=useState(false)
  let pics='http://localhost:5000/'
  const [data,setData]=useState([])
  //console.log(randomIndex)

  useEffect(()=>{
      const Fetch=async()=>{
       setLoad(true)
      const res =await axios.get('http://localhost:5000/getpost')
      setData(res.data) 
   
    }
    Fetch()
    },[])
    const getRandomData = () => {
      const randomData = [...data];
      randomData.sort(() => 0.5 - Math.random());
      return randomData.slice(0, 3);
    };
    const randomData = getRandomData();
  return (
    <div>
   <div className="Top">
   <div className="top">
        <h1 className='tt'>Most Visited place</h1>
        <div className="tops">
       { randomData.map((e)=>
        <div className="topp">
              <img src={pics+e.public_url} alt={e.public_url} srcset={pics+e.public_url} />
              <div className="list">
               <div className="t">{e.place}</div>
               <div className="n"><h1>{e.title}</h1></div>
               <p>{e.desc}</p>
                <div className="btn">
                <Link to={`/single/${1}`}><button>More</button></Link>
                </div>
              </div>
            </div>
        )    
          }
        </div>
        
      </div>
   </div>
    </div>
  )
}

export default Top

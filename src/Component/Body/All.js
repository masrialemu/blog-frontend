import React, { useContext, useEffect, useState } from 'react'
import './all.css'
import Img from '../../img/80.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-use-history'
import { Context } from '../Context/Context';
import axios from 'axios';
function All() {
  const history = useHistory()
  // ...
  const {user,data,currentPageData}=useContext(Context)
  const More=(e)=>{
    history.push(`/single/${e}`)
    
  }
 const Single=()=>{
   
 }

  return (
    <div>
    <div className="Top">
   <div className="topx">
   <div className="deco"></div>
       
       {currentPageData.map((e)=> <div className="tops" key={e._id}>
        <div className="decos"></div>
            <div className="topp" onClick={()=>More(e._id)}>
              <img src={e.public_url} alt={e.public_url}  className='immg' />
              <div className="list">
               <div className="tms">
               <div className="t">{e.place}</div>
               <div className="t">{new Date(e.createdAt).toDateString()}</div>
               </div>
               <div className="n"><h1>{e.title}</h1></div>
               <p>{e.desc.substring(0, 200) + '.....'}
               </p>
                 <div className="btn">
                <button onClick={()=>More(e._id)}>More</button>{ user && user.user.name &&<button onClick={()=>More(e._id)}>Edit</button>
              }</div>
              </div>
            </div>
        </div> )}


      </div>
   </div>
    </div>
  )
}

export default All

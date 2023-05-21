import React, { useContext, useEffect, useState } from 'react'
import './all.css'
import Img from '../../img/80.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-use-history'
import { Context } from '../Context/Context';
import axios from 'axios';
function Allx() {
    const [all,setAll]=useState([])
  let Pic='http://localhost:5000/'
  const history = useHistory()
  // ...
  const {user,data,currentPageData}=useContext(Context)
  const More=(e)=>{
    history.push(`/single/${e}`)
    
  }


 useEffect(()=>{
  const Fe=async()=>{
   const res=await axios.get(`http://localhost:5000/findbyemail/${user.user.email}`)
    setAll(res.data) 
}
  Fe()
 },[])

  return (
    <div>
    <div className="Top">
   <div className="topx">
   <div className="deco"></div>
       
       {all.map((e)=> <div className="tops" key={e._id}>
        <div className="decos"></div>
            <div className="topp" onClick={()=>More(e._id)}>
              <img src={Pic+e.public_url} alt={Pic+e.public_url} srcset={Pic+e.public_url} className='immg' />
              <div className="list">
               <div className="t">{e.name}</div>
               <div className="n"><h1>{e.title}</h1></div>
               <p>{e.desc}
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

export default Allx

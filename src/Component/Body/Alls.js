import React, { useContext, useEffect, useState } from 'react'
import './all.css'
import Img from '../../img/80.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-use-history'
import { Context } from '../Context/Context';
import axios from 'axios';
function Alls({e}) {
  let Pic='http://localhost:5000/'
  const history = useHistory()
  // ...
  const {user,data}=useContext(Context)
  const More=(e)=>{
    history.push(`/single/${e}`)
    
  }
  const [load,setLoad]=useState(false)

  const [data1,setData1]=useState([])
  //console.log(randomIndex)

  useEffect(()=>{
      const Fetch=async()=>{
       setLoad(true)
      const res =await axios.get('http://localhost:5000/getpost')
      setData1(res.data) 
   
    }
    Fetch()
    },[])
    const getRandomData = () => {
      const randomData = [...data1];
      randomData.sort(() => 0.5 - Math.random());
      return randomData.slice(0,6);
    };
    const randomData = getRandomData();

  return (
    <div>
    <div className="Top">
   <div className="topx">
   <div className="deco"></div>
   {
    randomData.map((e)=>   
        <div className="tops">
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
         
        </div>
        )
    }
        


      </div>
   </div>
    </div>
  )
}

export default Alls

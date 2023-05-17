import React, { useContext, useEffect,useState } from 'react'
import Top from './Top'
import Mid from './Mid'
import Search from './Search'
import All from './All'
import axios from 'axios'
import { Context } from '../Context/Context'

import './allx.css'
import './body.css'
import Loading from '../Loading/Loading'
function Body() {
  const {user}=useContext(Context)
  const [load,setLoad]=useState(false)
  let Pic='http://localhost:5000/'
  const [data,setData]=useState([])

  const [Run1,setRun1]=useState([])
  const [Run2,setRun2]=useState([])
  const [Run3,setRun3]=useState([])
  const randomIndex1 = Math.floor(Math.random() * (data.length));
  const randomIndex2 = Math.floor(Math.random() * data.length);
  const randomIndex3 = Math.floor(Math.random() * data.length);
  //console.log(randomIndex)

  useEffect(()=>{
      const Fetch=async()=>{
       setLoad(true)
      const res =await axios.get('http://localhost:5000/getpost')
      setData(res.data) 
   
    }
    Fetch()
    },[1])

  return (
    <div className='bodyx'>
      {/* {<Top name1={Run1.name} id1={Run1._id} title1={Run1.title} desc1={Run1.desc} imgs1={Pic+Run1.public_url}
      name2={Run2.name} id2={Run2._id} title2={Run2.title} desc2={Run2.desc} imgs2={Pic+Run2.public_url}
      name3={Run3.name} id3={Run2._id} title3={Run3.title} desc3={Run3.desc} imgs3={Pic+Run3.public_url}
              //id={e._id} name={e.name} desc={e.desc} title={e.title} img_url={Pic+e.public_url} img_id={e.cloudinary_id}

      />}
      <Mid/> */}
   
      {/* <Search/> */}
      <div className="All">
        <div className="Alls">
        <Mid/>
        
        <All  />
        </div>
      </div>
    </div>
  )
}

export default Body

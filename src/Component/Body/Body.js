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
import Alls from './Alls'
function Body() {
  const {user}=useContext(Context)
  const [load,setLoad]=useState(false)
  let Pic='http://localhost:5000/'
  const [data,setData]=useState([])
  //console.log(randomIndex)

  // useEffect(()=>{
  //     const Fetch=async()=>{
  //      setLoad(true)
  //     const res =await axios.get('http://localhost:5000/getpost')
  //     setData(res.data) 
   
  //   }
  //   Fetch()
  //   },[])
  //   const getRandomData = () => {
  //     const randomData = [...data];
  //     randomData.sort(() => 0.5 - Math.random());
  //     return randomData.slice(0, 3);
  //   };
  //   const randomData = getRandomData();
  return (
       <div>
        <All/>
        </div>
  
  )
}

export default Body

import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Header/Navbar'
import Singles from '../Component/Single/Single'
import Footer from '../Main/Footer'
import All from '../Component/Body/All'
import { useLocation } from 'react-router'


import axios from 'axios'

function Single() {
  const [data,setData]=useState({})
  const location=useLocation()
  const id= location.pathname.split('/')[2]
  let Pic='http://localhost:5000/'
  useEffect(()=>{
    const Fech=async()=>{
     const res= await axios.get(`http://localhost:5000/sgetpost/${id}`)
     
     setData(res.data.user);
     console.log(res.data.user)
    }
    Fech()
  },[0])
  //console.log(Pic+data.public_url)
  return (
    <div>
    <Navbar/>
    {<Singles title={data.title} desc={data.desc} name={data.name} imgs={Pic+data.public_url} id={data._id} /> }
    <h1 className="rl">Related</h1>
    <All/>
    <Footer/>
    </div>
  )
}

export default Single

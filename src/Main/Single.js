import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Header/Navbar'
import Singles from '../Component/Single/Single'
import Footer from '../Main/Footer'
import All from '../Component/Body/All'
import { useLocation } from 'react-router'


import axios from 'axios'
import Alls from '../Component/Body/Alls'

function Single() {
  const [data,setData]=useState({})
  const location=useLocation()
  const id= location.pathname.split('/')[2]
  useEffect(()=>{
    const Fech=async()=>{
     const res= await axios.get(`https://blog-backend-end-m4rj.onrender.com/sgetpost/${id}`)
     
     setData(res.data.user);
      
    }
    Fech()
  },[])
  
  
  return (
    <div>
    <Navbar/>
    {<Singles title={data.title} desc={data.desc} place={data.place} imgs={data.public_url} id={data._id} email={data.email} time={data.createdAt} /> }
    <h1 className="rl">Related</h1>
    <Alls/>
    <Footer/>
    </div>
  )
}

export default Single

import React, { useState } from 'react'
import Navbar from '../Component/Header/Navbar'
import Logins from '../Component/Auth/Login'
import Footer from './Footer'
import axios from 'axios'
function Login() {
 const [log,setLog]= useState([])
  return (
    <div>
      <Navbar/>
      <Logins/>
      <Footer/>
    </div>
  )
}

export default Login

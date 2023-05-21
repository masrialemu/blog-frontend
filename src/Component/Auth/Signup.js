import React from 'react'
import './auth.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Signup() {
  const [err,setErr]=useState(false)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [name,setName]=useState('')
 
  const Logins=async(e)=>{
   e.preventDefault()
   const res=await axios.post('http://localhost:5000/signup',{name,email,password})
   
   if(res.data){
    window.location.replace('/login')
   }
   else{
    setErr(true)
   }
  }
  return (
    <div>
    <div className="logx">
      <div className="logsx">
        <form onSubmit={Logins}>
        <h1>Signup Page</h1>
        { err&& <p className='un'>some thing is wrong</p>}<input type="text" name="name" className='email' placeholder='enter your name' onChange={e=>setName(e.target.value)} />
          <input type="email" name="email" className='email' placeholder='enter your email'  onChange={e=>setEmail(e.target.value)} />
          <input type="password" name="password" className='pass' placeholder='enter your password' onChange={e=>setPassword(e.target.value)} />
          <input type="password" name="password" className='pass' placeholder='enter your password' />
       
          <input type="submit" value="Signup" className='logins' />
          <Link to="/login">i have account</Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup

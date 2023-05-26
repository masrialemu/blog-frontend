import React from 'react'
import './auth.css'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-use-history'


function Signup() {
  const history = useHistory()
  const [err,setErr]=useState(false)
  const [errpass,setErrPass]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
   
  const [name,setName]=useState('')
 
  const Logins=async(e)=>{
   e.preventDefault()
   if (password!== confirmPassword) {
    setErr(true);
    setErrPass('Passwords do not match')
  } else if (!password || !name || !email) {
    setErr(true);
    setErrPass('Please fill in all fields');
  } else {
    // Password validation successful, proceed with signup
    const res=await axios.post('https://blog-backend-end-m4rj.onrender.com/signup',{name,email,password})
   .then((response) => {
    // Handle successful login
    history.push('/login')
    setErr(true)
    // setLoading(true)
  })
  .catch((error) => {
    // Handle login error
    console.log('Invalid email or password');
    setErr(true)
    setErrPass('An error occurred during signup');
    // setLoading(false)
  });
    // Add your signup logic here
  }


   
 

  }
  return (
    <div>
    <div className="logx">
      <div className="logsx">
        <form onSubmit={Logins}>
        <h1>Signup Page</h1>
        { err&& <p className='un'>{errpass}</p>}<input type="text" name="name" className='email' placeholder='enter your name' onChange={e=>setName(e.target.value)} />
          <input type="email" name="email" className='email' placeholder='enter your email'  onChange={e=>setEmail(e.target.value)} />
          <input type="password" name="password" className='pass' placeholder='enter your password' onChange={e=>setPassword(e.target.value)} />
          <input type="password" name="password" className='pass' placeholder='enter your password'  onChange={e=>setConfirmPassword(e.target.value)} />
       
          <input type="submit" value="Signup" className='logins' />
          <Link to="/login">i have account</Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup

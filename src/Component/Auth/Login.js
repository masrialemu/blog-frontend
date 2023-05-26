import React, { useContext, useEffect, useRef } from 'react'
import './auth.css'
import { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';
import { Context } from '../Context/Context';
import { Link, useNavigation} from 'react-router-dom';
import { useHistory } from 'react-router-use-history'
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

function Login() {
  const history = useHistory()
  const {user,setUser}=useContext(Context)
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [err,setErr]=useState(false)
  const [loading,setLoading]=useState(false)
 



  

  const Logins=async(e)=>{
    e.preventDefault()
    setLoading(true)
    
   const res=await axios.post('https://blog-backend-end-m4rj.onrender.com/signin',{email,password})
   .then((response) => {
    // Handle successful login
    setUser(response.data)
    response.data && history.push('/')
    setLoading(true)
  })
  .catch((error) => {
    // Handle login error
    console.log('Invalid email or password');
    setErr(true)
    setLoading(false)
  });

 

   
   // Store user details and token in localStorage
  //  updateUser({
  //   token:token,
  //   email1: email,
  //   password1: password,
  //   name:name,
  //   admin:isadmin,
  //   profilePicture:pic
  // });
   
    
    
    // localStorage.setItem('user',JSON.stringify(setUser(res.data)))
    }
 // console.log(user(JSON.parse(localStorage.getItem('user'))))
  return (
    <div>
      <div className="logx">
      <div className="desco"></div>
        <div className="logsx">

          <form onSubmit={Logins}>
          <h1>Login Page</h1>
            {err && <p className='un'>username or password is incorrect</p>}
            <input type="email" name="email" className='email' placeholder='enter your email'  onChange={e=>setEmail(e.target.value)} />
            <input type="password" name="password" className='pass' placeholder='enter your password'  onChange={e=>setPassword(e.target.value)} />
         
           {!loading ?  <input type="submit" value="Login" className='logins' />:
           <input type="submit" value="Login" className='loginss' disabled />
          }
            {/* <p>forget password</p> */}
            <Link to="/signup">i haven't account</Link>
          </form>
          <div className="descos"></div>
        </div>
      </div>
    </div>
  )
}

export default Login

import React, { useContext, useRef } from 'react'
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
   const res=await axios.post('http://localhost:5000/signin',{email,password})
   setUser(res.data)
   localStorage.setItem('user', JSON.stringify(res.data));
    res.data && history.push('/')
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
          <button  className='logins'> 
          <ClipLoader
          color="#36d7b7"
          loading={loading}
          cssOverride={override}
          size={13}
          aria-label="Loading Spinner"
          data-testid="loader"
          /></button>
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

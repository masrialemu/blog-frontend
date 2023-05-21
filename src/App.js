import React, { useContext } from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './Main/Home'
import Post from './Main/Post'
import Profile from './Main/Profile'
import Login from './Main/Login'
import Signup from './Main/Signup'
import Single from './Main/Single'
import Contact from './Main/Contact';
import { Context } from './Component/Context/Context';
function App() {
  const {user,setUser,
    token, email1, password1, name, admin, profilePicture, updateUser
  }=useContext(Context)
 
  return (
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path="/post"  element={name ? <Post/>: <Login/>}/>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="/profile"  element={name ? <Profile/>:<Login/>} />
    <Route path="/login"  element={<Login/>}/>
    <Route path="/signup"  element={<Signup/>}/>
    <Route path="/single/:id"  element={<Single/>}/>
    </Routes>
  )
}

export default App

import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'
import Logo from '../../img/Sheka_best_logo.png'
import { AiOutlineUserAdd,AiOutlineLogout,AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { Context } from '../Context/Context';
import User from '../../img/user.png'
function Navbar() {
  // const {user,Logout,parsedData}=useContext(Context)
  const {user,setUser}=useContext(Context)
  const [hide,setHide]=useState(false)
  const [scroll,setScroll]=useState(false)
  const [size,setSize]=useState(window.innerWidth)
  const pics=user && user.user.pic
  const Pic =user && user.user.pic==="" ? User : pics

  const ShowAct=()=>{
     setHide(p=>!p)
  }


  useEffect(()=>{
    window.addEventListener('resize',()=>{
     setSize(window.innerWidth)
    })
    if(size<=700){
      setHide(true)
      
     }
     else{
      setHide(false)
     }
  },[size])
  const StyHd={
    height: hide ?`${0}px`:`auto`,
    overflow: hide ? `hidden`:`visible`,
    // top: hide ? `${15}%`:`${17}%`,
    top: hide ? `${15}%`:`${90}%`,
    borderBottom: hide && 'none'
    // backgroundColor:!hide && 'black',

  }
  return (
    <div>
      <div className="Main">
        <div className="main" style={{backgroundColor:'azure'}}>
          <div className="logo">
           <img src={Logo} alt="image" />
          </div>
          <div className="menu" >
            <div className="menus" style={StyHd}>
             <h3> <NavLink  to={'/'}>Home</NavLink></h3>
             <h3><NavLink  to={'/post'}>Post</NavLink></h3>
             <h3><NavLink  to={'/contact'}>Contact</NavLink></h3>
             <h4 className='login'> {!user ? <NavLink  className={'lg'} to={'/login'}>Login</NavLink>:<NavLink  className={'lg'} onClick={Logout}>Logout</NavLink>}</h4>
            </div>
          </div>
          <div className="pic">
            <div className="pics">
      <h1><NavLink to={'/profile'}>{!user ? <AiOutlineUserAdd/>: <img className='ppic'  src={Pic} />}</NavLink></h1>
        <h2><button className='btn' onClick={ShowAct}>{!hide ? "x":"="}</button></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

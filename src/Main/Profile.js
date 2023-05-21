import React, { useState } from 'react'
import Navbar from '../Component/Header/Navbar'
import Footer from './Footer'
import Profiles from './../Component/Profile/Profiles'
import Allx from '../Component/Body/Allx'
function Profile() {
 
  return (
    <div>
    <Navbar/>
    <Profiles />
    <div className='your'>
    <h1>Your Post</h1>
    </div>
    <Allx/>
    <Footer/>
    </div>
  )
}

export default Profile

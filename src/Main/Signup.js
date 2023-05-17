import React, { useState } from 'react'
import Navbar from '../Component/Header/Navbar'
import Footer from '../Main/Footer'
import Signups from '../Component/Auth/Signup'


function Signup() {
  return (
    <div>
    <Navbar/>
    <Signups/>
    <Footer/>
    </div>
  )
}

export default Signup

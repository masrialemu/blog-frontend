import React, { useState } from 'react'
import Navbar from '../Component/Header/Navbar'
import Background from '../Component/Header/BackGround'
import Footer from '../Main/Footer'
import Body from './Body'
import Pagination from '../Component/Pagination/Pagination'  
function Homes() {

  return (
    <div>
      <Navbar/>
      <Background/>
      <Body/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default Homes

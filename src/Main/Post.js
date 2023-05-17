import React from 'react'
import Navbar from '../Component/Header/Navbar'
import Posts from '../Component/Post/Post'
import Footer from '../Main/Footer'
import All from '../Component/Body/All'
function Post() {
  return (
    <div>
    <Navbar/>
    <Posts/>
    <div className="tit">
      <h1>Your Post</h1>
      <div className="li"></div>
    </div>
    <All/>

    <Footer/>
    </div>
  )
}

export default Post

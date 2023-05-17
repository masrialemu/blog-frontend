import React, { useContext } from 'react'
import Homes from './Homes'
import Navbar from '../Component/Header/Navbar'
import Footer from '../Component/Footer/Footer'
import Loading from '../Component/Loading/Loading'
import { Context } from '../Component/Context/Context'

function Home() {
  const {load}=useContext(Context)
  return (
    <div>
   { load? <Loading/>
     :<Homes/>}
    </div>
  )
}

export default Home

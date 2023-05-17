import React from 'react'
import {AiFillFacebook,AiFillGithub,AiOutlineTwitter,AiFillLinkedin, AiOutlineInstagram,AiOutlineUser,AiOutlineRight,AiOutlineLeft } from "react-icons/ai"
import {FaTelegram} from "react-icons/fa"
import './footer.css'
function Footer() {
  return (
    <div>
    <div className='footer'>
        <div className="footers">
        <span>Blog Website </span>
        <h3>Visit Sheka Zone </h3>
         <div className="Footers">
           <ul>

           <li><a href="#">home</a></li>
           <li><a href="#">about</a></li>
           <li><a href="/contact">contact</a></li>
           <li><a href="/login">login</a></li>
           </ul>
           <div className="line">
           <h1><a href="https://www.linkedin.com/in/masresha-alemu-851241232" target="_blank" ><AiFillLinkedin/></a></h1>
           <h1><a href="https://github.com/masrialemu?tab=repositories" target="_blank" ><AiFillGithub/></a></h1>
    

           <h1><a href="https://www.facebook.com/profile.php?id=100013708891539" target="_blank" ><AiFillFacebook/></a></h1>
           <h1><a href="https://t.me/Masri404" target="_blank" ><FaTelegram/></a></h1>
          
           <h1><a href="https://www.MasriAlemu?s=01" target="_blank" ><AiOutlineTwitter/></a></h1>
           <h1><a href="#" target="_blank" ><AiOutlineInstagram/></a></h1>
           
           </div>
           <p className="copy">copyright {new Date().getFullYear()}</p>
         </div>
        </div>
    </div>
    </div>
  )
}

export default Footer

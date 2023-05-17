import React, { useContext } from 'react'
import "./profiles.css";
import { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Context } from '../Context/Context';
import Profile from '../../Main/Profile';
import axios from 'axios';
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function Profiles() {
  const pic='http://localhost:5000/'
  const {user,Save,parsedData}=useContext(Context)
  const [password,setPassword]=useState('')
  const [name,setName]=useState(user.user.name)
  const [email,setEmail]=useState(user.user.email)
  const [admin,setAdmin]=useState(user.user.isadmin)
  const [img,setImg]=useState(null)
  const [edit,setEdit]=useState(false)
  const [err,setErr]=useState(false)
  
  const Edit=()=>{
    setEdit(p=>!p)
  }

  const Cancel=()=>{
    setEdit(p=>!p)
  }
  const Uploaded=(e)=>{
    const select = e.target.files[0]
    const fileReader= URL.createObjectURL(select)
    setImg(fileReader)
    
  
  }
  const Saves=(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name',name);
    formData.append('password', password);
    formData.append('image', img);
    const res=axios.post('http://localhost:5000/signin/edit', formData,
    {headers:{authorization:"Bearer "+user.token }})
    .then(res => window.location.reload())
    .catch(err => console.log(err));
  }
    const Colors={
        color:"black"
    }
    console.log(email)
   const BackGround={
    backgroundColor:'transparent'
   }
 
  return (
    <div>
    
      <div className="pro">
        <div className="pros">
            
           {img? ( <img src={img} alt="image" srcset={img} />):(<img src={user.user.pic} alt={user.user.name} srcset={pic+user.user.pic} />)}
              {admin ? <h4>Admin</h4>:<h4>User</h4>}
            {err && <h2 className="err">Something is error</h2>}              <label htmlFor="imgs" >
              <input type="file"  name="image" accept='image'  id='upload' style={{display:'none'}}  accept='image' className='file' onChange={Uploaded} />
              <div className='btnn'>
           <label htmlFor="upload" className='btnxx'>
           IMAGE
           </label>
</div>
              </label>
             <div className="tbl">
             <div  className="table-form">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
           {!edit ?     <input type='name'
                id="email"
                name="email"
                disabled
                value={name}
                style={BackGround}
                 />:
                 <input type='name'
                 id="email"
                 name="name"
                onChange={e=>setName(e.target.value)}
                 style={BackGround}
                  />
            }</td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email:</label>
            </td>
            <td>
            {
            !edit ?
            <input type='email'
                id="email"
                name="email"
                disabled
                value={email}
                style={BackGround}
                 />:
                 <input type='email'
                 id="email"
                 name="email"
                 value={email}
                 style={BackGround}
                  />
            
            }</td>
           
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password:</label>
            </td>
            <td>
            {!edit ?     <input type='password'
                id="email"
                name="password"
                disabled
                value='12345678'
                style={BackGround}
                 />:
                 <input type='password'
                 id="email"
                 name="password"
                 onChange={e=>setPassword(e.target.value)}   
                 style={BackGround}
                  />
            }</td>
           
          </tr>
          <tr>
            <td colSpan="2">
              {!edit ?<button onClick={Edit}>Edit</button>:<button onClick={Cancel}>Cancel</button>}
              <button onClick={Saves}>Save</button>
 
            </td>
          </tr>
        </tbody>
      </table>
    </div>

             </div>
             
         
        </div>
      </div>
    </div>
  )
}

export default Profiles

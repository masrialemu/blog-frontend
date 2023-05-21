import React, { useContext } from 'react'
import "./profiles.css";
import { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Context } from '../Context/Context';
import Profile from '../../Main/Profile';
import axios from 'axios';
import UserPic from '../../img/user.png'
import Loading from '../Loading/Loading';
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function Profiles() {

  const pic='http://localhost:5000/'
  // const {user,Save}=useContext(Context)
  const {user,setUser,Save,
    token, email1, password1, name, admin, profilePicture, updateUser
  }=useContext(Context)
  const [name1,setName1]=useState(name)
  const [email,setEmail]=useState(email1)
  const [admin1,setAdmin1]=useState(admin)
  const [password,setPassword]=useState(password1)
  const [img,setImg]=useState(null)
  const [file, setFile] = useState(null);
  const [Load,setLoad]=useState(false)
  const [edit,setEdit]=useState(false)
  const [err,setErr]=useState(false)
  
  const Edit=()=>{
    setEdit(p=>!p)
  }

  const Cancel=()=>{
    setEdit(true)
  }
  

  const Uploaded=(e)=>{
    const select = e.target.files[0]
    const fileReader= URL.createObjectURL(select)
    setImg(fileReader)
    setFile(select)
  }
  const Submit=async(e)=>{

    e.preventDefault();
    setLoad(true)
    const formData = await new FormData();
    formData.append('email', email);
    formData.append('name', name1);
    formData.append('password', password);
    formData.append('image', file);
    const res=await axios.put(`http://localhost:5000/signin/edit/${user.user.id}`, formData,
    {headers:{authorization:"Bearer "+user.token }}
    )
    .then(res => 
      updateUser({
        token:token,
        email1: email,
        password1: password,
        name:name,
        admin:isadmin,
        profilePicture:pic
      }),
      window.location.reload())
    setLoad(false)
    .catch(err => console.log(err) ,setLoad(false));
   
  }
  // const Saves=(e)=>{
  //   e.preventDefault();
    
  //   const formData = new FormData();
  //   formData.append('image', img);
  //   formData.append('name',name);
  //   formData.append('password', password);
    
  //   const res=axios.post('http://localhost:5000/signin/edit', formData,
  //   {headers:{authorization:"Bearer "+user.token }})
  //   .then(res => window.location.reload())
  //   .catch(err => console.log(err));
  // }
    const Colors={
        color:"black"
    }
   
   const BackGround={
    backgroundColor:'transparent'
   }
 
  return (
    <div>
    
      <div className="pro">
        <div className="pros">
            
           {img ? ( <img src={img} alt="image" srcset={img} />):(<img src={pic+profilePicture} alt={profilePicture} srcset={pic+profilePicture} />)}
              {admin1 ? <h4>Admin</h4>:<h4>User</h4>}
            {err && <h2 className="err">Something is error</h2>}              <label htmlFor="imgs" >
              <input type="file"  name="image"   id='upload' style={{display:'none'}}  accept='image' className='file' onChange={Uploaded} />
              {edit && <div className='btnn'>
           <label htmlFor="upload" className='btnxx'>
           IMAGE
           </label>
              </div>}
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
                id="name"
                name="name"
                disabled
                value={name1}
                style={BackGround}
                 />:
                 <input type='name'
                 id="email"
                 name="name"
                onChange={e=>setName1(e.target.value)}
                 style={BackGround}
                  />
            }</td>
          </tr>
         {admin && <tr>
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
                 onChange={e=>setEmail(e.target.value)}
                  />
            
            }</td>
           
          </tr>}
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
         {admin&& <tr>
          <td>
            <label htmlFor="password">isAdmin:</label>
          </td>
          <td>
          {!edit ?     <input type='name'
              id="email"
              name="admin"
              disabled
              value={admin1}
              style={BackGround}
               />:
               <input type='name'
               id="email"
               name="False"
               onChange={e=>setAdmin1(e.target.value)}   
               style={BackGround}
                />
          }</td>
         
        </tr>}
          <tr>
            <td colSpan="2">
              {!edit ?<button onClick={Edit}>Edit</button>:<button onClick={Cancel}>Cancel</button>}
             {!Load ?  <button onClick={Submit}>Save</button>:  <button disabled style={{background:'transparent', color:'black', border:'2px solid black'}}>Save</button>}
 
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

import React, { useContext } from 'react'
import "./profiles.css";
import { useState,useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { Context } from '../Context/Context';
import Profile from '../../Main/Profile';
import axios from 'axios';
import UserPic from '../../img/user.png'
import Loading from '../Loading/Loading';
import { useHistory } from 'react-router-use-history'

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


function Profiles() {
  const history = useHistory()
  // const {user,Save}=useContext(Context)
  const {user,setUser,Save,Logout }=useContext(Context)
  const pics=user.user.pic
  const pic =user.user.pic==="" ? UserPic : pics
  const [name1,setName1]=useState(user.user.name)
  const [email,setEmail]=useState(user.user.email1)
  const [admin1,setAdmin1]=useState(user.user.isadmin)
  const [password,setPassword]=useState('')
  const [img,setImg]=useState(null)
  const [file, setFile] = useState(null);
  const [Load,setLoad]=useState(false)
  const [edit,setEdit]=useState(false)
  const [err,setErr]=useState(false)
  const [errpass,setErrPass]=useState('')
  const Edit=()=>{
    setEdit(p=>!p)
  }

  const Cancel=()=>{
    setEdit(false)
  }
  

  const Uploaded=(e)=>{
    const select = e.target.files[0]
    const fileReader= URL.createObjectURL(select)
    setImg(fileReader)
    setFile(select)
  }
  let BackGround;
  const Submit=async(e)=>{

    e.preventDefault();
    setLoad(true)
    const formData = await new FormData();
    formData.append('email', email);
    formData.append('name', name1);
    formData.append('password', password);
    formData.append('isadmin', admin1);
    formData.append('image', file);

    if (!name1) {
      setErr(true);
      setErrPass('Please the fields')
      setLoad(false)
    }else if (!password) {
      setErr(true);
      setErrPass('Please enter your password');
    } else{
      const res=await axios.put(`https://blog-backend-end-m4rj.onrender.com/signin/edit/${user.user.id}`, formData,
      {headers:{authorization:"Bearer "+user.token }}
      ) .then((response) => {
        // Handle successful login
        history.push('/')
        setErr(false)
     
         const BackGround={
           backgroundColor:'black',color:"white"
         }
   
        setErrPass('your profile is successfully changed');
 
      })
      .catch((error) => {
        // Handle login error
        
        setErr(true)
        setLoad(false)
        setErrPass('An error occurred during profile change');
    
        }  )

     
    }
    }
    
   
 
 
  return (
    <div>
    
      <div className="pro">
        <div className="pros">
        

           {img ? ( <img src={img} alt="image" srcset={img} />):(<img src={pic} alt={pic} srcset={pic} />)}
              {admin1 ? <h4>Admin</h4>:<h4>User</h4>}
            {err && <h2 className="err" style={BackGround}>{errpass}</h2>}              <label htmlFor="imgs" >
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
         {admin1 && <tr>
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
                style={BackGround}
                 />:
                 <input type='password'
                 value={password}
                 id="email"
                 onChange={e=>setPassword(e.target.value)}   
                 style={BackGround}
                  />
            }</td>
           
          </tr>
         {admin1&& <tr>
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
             {edit && !Load ?  <button onClick={Submit}>Save</button>:  <button disabled style={{background:'transparent', color:'black', border:'2px solid black'}}>Save</button>}
 
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

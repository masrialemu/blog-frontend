import React, { useContext, useEffect } from 'react'
import './single.css'
import Img from '../../img/37.jpg'
import { useState } from 'react'
import {useNavigation} from 'react-router'
import { Context } from '../Context/Context';
import axios from 'axios'


function Single({email,name,title,desc,imgs,id}) {
  const {user}=useContext(Context)
  const [img,setImg]=useState(null)
  const [file, setFile] = useState(null);
  const [titles,setTitles]=useState(title)
  const [descs,setDescs]=useState(desc)
  const [edit,setEdit]=useState(true)
  const Uploaded=(e)=>{
    const select = e.target.files[0]
    const fileReader= URL.createObjectURL(select)
    setImg(fileReader)
    setFile(select)
  }
  const Delete=async()=>{
    const res = await axios.delete(`http://localhost:5000/getdelete/${id}`,
    {headers:{authorization:"Bearer "+user.token }}).then(res => window.location.reload())
    .catch(err => console.log(err));
  }
  const Save=async(e)=>{
    // e.perventDefault()
    const formData = new FormData();
    const id= user.user._id;
    // formData.append('email', user.user.email);
    formData.append('title', titles);
    formData.append('desc', descs);
    formData.append('image', file);
    const res=axios.put(`http://localhost:5000/getedit/${e}`, formData,
    {headers:{authorization:"Bearer "+user.token }})
    .then(res => window.location.reload())
    .catch(err => console.log(err));
  }

  const Edit=()=>{
    setEdit(p=>!p)
  }


  return (
    <div>
       <div className="single">
        <div className="singles">
        <div className="Picss">
    {!file? <img src={imgs} alt="image" />:<img src={img} alt="image" />}
{!edit && <input type="file" id='upload' style={{display:'none'}}  accept='image' className='file' name="file"  accept='image' className='file' onChange={Uploaded}  />}
{!edit && <div className='btnn'>
           <label htmlFor="upload" className='btnxx'>
           IMAGE
           </label>
</div>}
  </div>
  <div className="title">{edit ? <h1>{title}</h1>:
   <textarea name="title" className='texts' onChange={e=>setTitles(e.target.value)} >{title}</textarea>
  }</div>

  <div className="form">
   <div className="time"><h5>12:00:00</h5></div>
   <div className="names"><h5>{name}</h5></div>
  </div>
  <div className="des">
  {edit ? <p>{desc}</p>:
  <textarea onChange={e=>setDescs(e.target.value)} name="desc" id="" className='text'>{desc}</textarea>
  }
  </div>
  {user && user.user.email===email && <div className="btn">
   {edit? <button className="edit" onClick={Edit}>Edit</button>: <button className="edit" onClick={Edit}>Cancel</button>}
    {edit ? <button className="delete" onClick={Delete}>Delete</button>:<button className="edit" onClick={()=>Save(id)}>Save</button>}
  </div>}
        </div>
       </div>
    </div>
  )
}

export default Single

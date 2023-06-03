import './single.css'
import Img from '../../img/37.jpg'
import React, { useContext, useEffect, useState } from 'react';
import {useNavigation} from 'react-router'
import { Context } from '../Context/Context';
import axios from 'axios'


function Single({email,place,title,desc,imgs,id,time}) {
  const {user}=useContext(Context)
  const [img,setImg]=useState(null)
  const [file, setFile] = useState(null);
  const [titles,setTitles]=useState({})
  const [descs,setDescs]=useState({})
  const [places,setPlaces]=useState({})
  const [edit,setEdit]=useState(true)
  const Uploaded=(e)=>{
    const select = e.target.files[0]
    const fileReader= URL.createObjectURL(select)
    setImg(fileReader)
    setFile(select)
  }
  const Delete=async()=>{
    const res = await axios.delete(`https://blog-backend-end-m4rj.onrender.com/getdelete/${id}`,
    {headers:{authorization:"Bearer "+user.token }}).then(res => window.location.reload())
    .catch(err => console.log(err));
  }
  const Save=async(e)=>{
    // e.perventDefault()
    const formData = new FormData();
   
    // formData.append('email', user.user.email);
    formData.append('title', titles);
    formData.append('desc', descs);
    formData.append('place', places);
    formData.append('image', file);
 
    const res=axios.put(`https://blog-backend-end-m4rj.onrender.com/getedit/${e}`, formData,
    {headers:{authorization:"Bearer "+user.token }})
    .then(res => window.location.reload())
    .catch(err => console.log(err));
  }
// console.log(descs)
  const Edit=()=>{
    setEdit(p=>!p)
  }


  return (
    <div>
       <div className="single">
        <div className="singles">
        <div className="Picss">
         
    {!file? <img src={imgs} alt="image"  srcset={imgs} />:<img src={img} alt="image"  srcset={img} />}
{!edit && <input type="file" id='upload' style={{display:'none'}}  accept='image' className='file' name="file"  accept='image' className='file' onChange={Uploaded}  />}
{!edit && <div className='btnn'>
           <label htmlFor="upload" className='btnxx'>
           IMAGE
           </label> </div>
  
  }
</div>
    <div className="doc">
      <div className="docs">
        <div className="tmx">
        {edit ? <input type="text" name="place" value={place} disabled />:<input type="text" name="place"  onChange={e=>setPlaces(e.target.value)} />}
        <input type="text" name="place" value={new Date(time).toDateString()} />
        </div>
        <div className="lls">
         {edit ? <input type="text" name="title" className='titx' value={title} disabled />: <input type="text" name="title" className='titx'  onChange={e=>setTitles(e.target.value)} />}
         {edit  ?  <textarea className='ddd' type="text" name="desc" value={desc} disabled />: <textarea className='ddd' type="text" name="desc"  onChange={e=>setDescs(e.target.value)} />}
        </div>
      </div>
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

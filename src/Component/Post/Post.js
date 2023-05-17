import React, { useContext } from 'react'
import './post.css'
import Img from '../../img/32.jpg'
import { useState } from 'react'
import axios from 'axios'
import { Context } from '../Context/Context'

function Post() {
  const {user}=useContext(Context)
  const [img,setImg]=useState(null)
  const [file, setFile] = useState(null);
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const [cat,setCat]=useState('')
  const Uploaded=(e)=>{
    const select = e.target.files[0]
    const fileReader= URL.createObjectURL(select)
    setImg(fileReader)
    setFile(select)
  }

  // <select id='list'>
  //                   <option disabled selected className='dc' ><h3>Select a category</h3></option>
  //                   <option value="River">River</option>
  //                   <option value="River">Food</option>
  //                   <option value="River">Forest</option>
  //                   <option value="River">Life-style</option>
  //               </select>

  const Submit=(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', user.user.name);
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('image', file);
    const res=axios.post('http://localhost:5000/posts', formData)
    .then(res => window.location.replace('/'))
    .catch(err => console.log(err));
   
  }
  return (
    <div>
      <div className="post">
        <div className="posts">
        <div className="desco"></div>
         <form onSubmit={Submit} method="post">
         <div className="descos"></div>
         <input type="text"  name="title" className='email' onChange={e=>setTitle(e.target.value)} placeholder='Title' />
            <textarea name="text" onChange={e=>setDesc(e.target.value)} className='desc' placeholder='Description'></textarea>
            {img && <img src={img} alt="" />}
            <input type="file" id='upload' style={{display:'none'}}  accept='image' className='file' onChange={Uploaded}  />
           <div className='btnn'>
           <label htmlFor="upload" className='btnxx'>
           IMAGE
           </label>
           </div>
            <div className="btn">
                <input type='submit'  value="Post" className='btns' />
            </div>

         </form>
        </div>

      </div>
    </div>
  )
}

export default Post

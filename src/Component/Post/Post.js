import React, { useContext, useState } from 'react';
import './post.css';
import Img from '../../img/32.jpg';
import { Context } from '../Context/Context';
import { useHistory } from 'react-router-use-history';
import axios from 'axios';

function Post() {
  const { user } = useContext(Context);
  const [img, setImg] = useState(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [place, setPlace] = useState('');
  const [Load, setLoad] = useState(false);
  const history = useHistory();

  const Uploaded = (e) => {
    const select = e.target.files[0];
    const fileReader = URL.createObjectURL(select);
    setImg(fileReader);
    setFile(select);
  };

  const Submit = (e) => {
    e.preventDefault();
    setLoad(true);

    if (!user || !user.user || !user.user.email || !user.token) {
      // Handle the case where  the user object or its properties are missing
      return;
    }

    const formData = new FormData();
    formData.append('email', user.user.email);
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('place', place);
    formData.append('image', file);

    axios.post(`https://blog-backend-end-m4rj.onrender.com/posts/${user.user.id}`, formData, {
        headers: { authorization: 'Bearer ' + user.token },
      })
      .then((res) => window.location.replace('/'))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="post">
        <div className="posts">
          <div className="desco"></div>
          <form onSubmit={Submit} method="post">
            <div className="descos"></div>
            <input
              type="text"
              name="title"
              className="email"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <input
              type="text"
              name="title"
              className="email"
              onChange={(e) => setPlace(e.target.value)}
              placeholder="Place"
            />
            <textarea
              name="text"
              onChange={(e) => setDesc(e.target.value)}
              className="desc"
              placeholder="Description"
            ></textarea>
            {img && <img src={img} alt="" />}
            <input
              type="file"
              id="upload"
              style={{ display: 'none' }}
              accept="image"
              className="file"
              onChange={Uploaded}
            />
            <div className="btnn">
              <label htmlFor="upload" className="btnxx">
                IMAGE
              </label>
            </div>
            <div className="btn">
              {!Load ? (
                <input type="submit" value="Post" className="btns" />
              ) : (
                <input
                  type="submit"
                  value="Post"
                  className="btns"
                  disabled
                  style={{ background: 'transparent', color: 'black', border: '2px solid black' }}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post;

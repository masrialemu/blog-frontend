import React from 'react'
import './top.css'
import Img from '../../img/80.jpg';
import { Link } from 'react-router-dom';
function Top({name1,imgs1,title1,desc1,id1,
  name2,imgs2,title2,desc2,id2,
  name3,imgs3,title3,desc3,id3
}) {
  return (
    <div>
   <div className="Top">
   <div className="top">
        <h1 className='tt'>Most Visited place</h1>
        <div className="tops">
            <div className="topp">
              <img src={imgs1} alt={name1} srcset={imgs1} />
              <div className="list">
               <div className="t">{name1}</div>
               <div className="n"><h1>{title1}</h1></div>
               <p>{desc1}</p>
                <div className="btn">
                <Link to={`/single/${id1}`}><button>More</button></Link>
                </div>
              </div>
            </div>
            <div className="topp">
              <img src={imgs2} alt={name2} srcset={imgs2} />
              <div className="list">
               <div className="t">{name2}</div>
               <div className="n"><h1>{title2}</h1></div>
               <p>{desc2}</p>
                <div className="btn">
                <Link to={`/single/${id2}`}><button>More</button></Link>
                </div>
              </div>
            </div>
            <div className="topp">
            <img src={imgs3} alt={name3} srcset={imgs3} />
            <div className="list">
             <div className="t">{name3}</div>
             <div className="n"><h1>{title3}</h1></div>
             <p>{desc3}</p>
              <div className="btn">
              <Link to={`/single/${id3}`}><button>More</button></Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>
   </div>
    </div>
  )
}

export default Top

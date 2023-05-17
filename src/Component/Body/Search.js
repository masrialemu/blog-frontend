import React from 'react'
import './search.css'
function Search() {
  return (
    <div>
      <div className="ser">
        <div className="sers">
            <div className="list">
               <li><button><h2>River</h2></button></li>
               <li><button><h2>Forest</h2></button></li>
               <li> <button><h2>Food</h2></button></li>
               <li><button><h2>Life-style</h2></button></li>   
            </div>
            <div className="s">
                <input type="search" name="search" placeholder='search in country' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Search

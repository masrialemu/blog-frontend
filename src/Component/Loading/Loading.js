import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './loading.css'
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    
  };

function Loading() {
    
    let [color, setColor] = useState("#ffffff");
  return (
<div>
   {<div className='loading'>
   <h1> <ClipLoader
    color={color}
    cssOverride={override}
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"
    /></h1>

    </div>}
</div>
  )
}

export default Loading

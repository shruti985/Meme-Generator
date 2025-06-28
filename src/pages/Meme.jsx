import React, { useState, createRef } from "react";
import { useSearchParams } from 'react-router-dom'
import Text from '../components/Text'
import {exportComponentAsJPEG} from 'react-component-export-image'
function Meme() {
  const [params]=useSearchParams()
  const url=params.get('url')
  const [count,setCount]=useState(0)
  const memeRef=createRef()
  return (
    <div>
        <div ref={memeRef} style={{width:"40vw",height:"50vh"}}>
        <img src={url} width="300px" height="400px"/>
        {Array(count).fill(0).map(()=><Text/>)}
        </div>
        <button onClick={()=>setCount(count+1)}>Add Text</button>
        <button variant="success" onClick={()=>exportComponentAsJPEG(memeRef)}>Save</button>
    </div>
  )
}

export default Meme
import React from 'react'
function Input({val,setVal}) {
    
  const  style={border:"2px solid black",borderRadius:"20px",fontSize:"15px"}
  return (
    <input style={style} value={val} onChange={(e)=>setVal(e.target.value)}></input>
  )
}

export default Input
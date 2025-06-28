import React, { useEffect, useState } from 'react'
import getAllMemes from '../api/memeapi.js'
import MemeCard from '../components/Card.jsx'
function Home() {
    const [data,setData]=useState([])
    useEffect(()=>{
        getAllMemes().then((memes)=>setData(memes.data.memes))
    })
   if(!data) console.log("Loading...");
  return (
    <div className='row home'>
      {data.map((el) => (
        <MemeCard title={el.name} url={el.url} id={el.id}/>
      ))}
    </div>
  );
}

export default Home
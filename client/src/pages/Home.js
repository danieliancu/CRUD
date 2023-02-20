import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Home = () => {

  const [data, setData] = useState([])
  const [q, setQ] = useState('')



  useEffect(()=>{
    Axios.get('http://localhost:3001/api/livratto/get').then((response)=>{
      setData(response.data)
    })
  },[])


  const handleSearch = (e) => {
    console.log(q)
    
  }

  return (
    <div className="container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e)=>setQ(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      {data.map((item,index)=><p key={index}>{item.NameCompany}</p>)}
    </div>
  )
}

export default Home
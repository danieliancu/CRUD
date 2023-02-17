import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const Search = () => {

    const [data, setData] = useState([])
    const [details, setDetails] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    },[])

    const alert = (id) => {
        console.log(data.filter(item=>item.id===id))
        setDetails(data.filter(item=>item.id===id))
    }

  return (
    <div className="admin">
        
        <div className="dashboard">
            <div className="dashboard-mask"></div>
            <h2>Companies</h2>
            <h2>Routes</h2>
        </div>

        <div className="directory">
            <div className="users">
                <h2>Directory</h2>
                <p>Search in over 3000 fields</p>
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <button>a</button>
                </div>
                {data.map((item,index)=>
                    <div
                        key={index}
                        className="user"
                        onClick={()=>alert(item.id)}
                    >
                        <img />
                        <div>
                            <p><strong>{item.name}</strong></p>
                            <p>{item.email}</p>
                        </div>                    
                    </div>
                )}
            </div>

            <div className="details">
                <img />
                <div className="contact">
                    <button>Message</button>
                    <button>Call</button>
                </div>
                <div>{details.map(item=><p>{item.name}</p>)}</div>
            </div>

        </div>
    </div>
  )
}

export default Search
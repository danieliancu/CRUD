import React, {useState, useEffect} from 'react'
import Axios from 'axios' 

import './App.css';

function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [allData, setAllData] = useState([])

  const [newEmail, setNewEmail] = useState("")


  //populate
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response)
      setAllData(response.data)
    })
  },[])

  //insert
  const submit = () => {
    Axios.post('http://localhost:3001/api/insert', {
      name: name,
      email: email
    })
    
    setAllData([
      ...allData,
      { name: name, email: email }
    ])    
  }

  //delete
  const del = (id) => {
    Axios.delete(`http://localhost:3001/api/delete/${id}`)
  }


  //updateID 

  const updateID = (id) => {
    Axios.put('http://localhost:3001/api/update', 
    {
      id:id,
      email:newEmail
    })
    setNewEmail("")
  }


  return (
    <div className="App">
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={(e)=>setEmail(e.target.value)}/>
      <button onClick = {submit}>Add</button>
      <hr />
      <div className="table">
        <div>
          <span>Name</span>
          <span>Email</span>
        </div>
        {allData.map((item, index)=>
        <div key={index}>
          <span>{item.id}. {item.name}</span>
          <span>{item.email}</span>
          <span>
            <input type="text" id="update" onChange={(e)=>{
              setNewEmail(e.target.value)
            }}/>
            <button onClick={(e)=>{updateID(item.id)}}>Update</button>
          </span>
          <span><button onClick={(e)=>del(item.id)}>Delete</button></span>
        </div>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react'
import { format, getUnixTime } from 'date-fns'
import Axios from 'axios'

const Search = () => {

    

    const [data, setData] = useState([])
    const [details, setDetails] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/livratto/get').then(response=>{
            setData(response.data)
            console.log(response)
        })
    },[])

    const details_company = (id) => {
        setDetails(data.filter(item=>item.idTransport===id))
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
                    <button>
                    <span className="material-symbols-outlined">search</span>
                    </button>
                </div>
                
                {data.map((item, index)=>
                    <div
                        key={index}
                        className="user"
                        onClick={()=>details_company(item.idTransport)}
                    >
                        <img alt="" src="https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"/>
                        <div>
                            <p><strong>{item.NameCompany}</strong></p>
                            <p>{item.EmailCompany}</p>
                        </div>
                    </div>
                )}

            </div>

            {details.map((item,index)=>
                <div key={index} className="details">
                    <img alt="" src="https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
                    <div className="contact">
                        <button><span className="material-symbols-outlined">mail</span>Message</button>
                        <button><span className="material-symbols-outlined">call</span>Call</button>
                    </div>                
                    <div className="details-list">
                        <h2><strong>{item.NameCompany}</strong></h2>
                        <div className="details-list-contact">
                            <div className="details-list-field">
                                <p>Phone 1:</p>
                                <p>{item.codePhoneCompany}{item.PhoneCompany}</p>
                            </div>
                            <div className="details-list-field">
                                <p>Phone 2:</p>
                                <p>{item.codePhoneCompany2}{item.PhoneCompany2}</p>
                            </div>
                            <div className="details-list-field">
                                <p>Email:</p>
                                <p>{item.EmailCompany}</p>
                            </div>
                            <div className="details-list-field">
                                <p>Website:</p>
                                <p>
                                    <a href={`https://${item.WebsiteCompany}`} target="_blank" rel="noreferrer">
                                        {}{item.WebsiteCompany}
                                    </a>
                                </p>
                            </div>
                            <div className="details-list-field">
                                <p>Facebook:</p>
                                <p>
                                    <a href={`https://www.facebook.com/${item.FacebookCompany}`} target="_blank" rel="noreferrer">
                                        {item.FacebookCompany}
                                    </a>
                                </p>
                            </div>
                            <div className="details-list-field">
                                <p>Address:</p>
                                <p>
                                    {item.AddressCompany !== "" && <span>{item.CityCompany} &#8226; </span>} 
                                    {item.CityCompany    !== "" && <span>{item.CityCompany} &#8226; </span> }
                                    {item.CountyCompany  !== "" && <span>{item.CountyCompany} &#8226; </span>}
                                    {item.CountryCompany !== "" && <span>{item.CountryCompany}</span>}
                                </p>
                            </div>
                        </div>   
                        <div className="details-list-about">
                            <p>
                                Registered since:
                                <br />
                                {Date.parse(`${item.timestamp}`)}
                            </p>
                            <p><span class="material-symbols-outlined">check_box</span> Factura </p>
                        </div>                                                                                                                     
                    </div>
                </div>
            )}

        </div>
    </div>
  )
}

export default Search
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <div className="container">
            <div className="logo">Livratto.com</div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/search">Search</Link></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
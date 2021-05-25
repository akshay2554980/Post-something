import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar bg-light container">
            <div><h1><Link to="/createnote" className="link">Post karo</Link></h1></div>
            <div ><Link to="/notes" className="link"><h3>Notes</h3></Link></div>
            <div className="navright">
            <div className="navrightdiv" ><Link to="/" className="link"><h3>Home</h3></Link></div>
            <div className="navrightdiv"><h3><Link to="/aboutus" className="link">About Us</Link></h3></div>
            <div className="navrightdiv link"><h3><Link to="/aboutus" className="link">Contact Us</Link></h3></div>
            </div>
        </nav>
    )
}

export default Navbar

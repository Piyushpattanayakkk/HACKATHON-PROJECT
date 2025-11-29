import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn')

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1 className="brand">🏠 ValueAdd Homes</h1>
      </div>
      <div className="nav-right">
        {isLoggedIn ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/ideas">Ideas</Link>
            <Link to="/submit">Submit</Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Enhance the Beauty and Value of Your Home</h1>
        <p>Discover creative and affordable ways to upgrade Indian middle-class homes.</p>
        <div className="buttons">
          <Link to="/ideas"><button className="btn-primary">View Ideas</button></Link>
          <Link to="/submit"><button className="btn-secondary">Submit Property Details</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Home

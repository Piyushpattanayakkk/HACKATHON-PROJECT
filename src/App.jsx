import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Ideas from './pages/Ideas'
import SubmitProperty from './pages/SubmitProperty'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/submit" element={<SubmitProperty />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App

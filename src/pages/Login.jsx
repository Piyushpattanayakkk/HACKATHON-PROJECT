import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) {
      navigate('/home')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    )

    if (validUser) {
      localStorage.setItem('isLoggedIn', 'true')
      navigate('/home')
    } else {
      alert('❌ Invalid email or password')
    }
  }

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don’t have an account?{' '}
          <span onClick={() => navigate('/register')} className="link">
            Register
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login

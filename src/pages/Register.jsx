import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.css'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn) {
      navigate('/home')
    }
  }, [])

  const handleRegister = (e) => {
    e.preventDefault()

    // Fetch existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || []

    // Check if email already exists
    const userExists = existingUsers.some((user) => user.email === email)

    if (userExists) {
      alert('⚠️ This email is already registered! Please log in instead.')
      navigate('/login')
      return
    }

    // Add new user
    const newUser = { email, password }
    const updatedUsers = [...existingUsers, newUser]

    // Save updated user list to localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers))
    alert('✅ Registration Successful! Please login now.')
    navigate('/login')
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
        <p>
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="link">
            Login
          </span>
        </p>
      </form>
    </div>
  )
}

export default Register

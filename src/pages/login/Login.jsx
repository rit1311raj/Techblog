import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
export default function Login() {
    return (
        <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label className='back'>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label  className='back'>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">
          <Link to="/register"  className='link' style={{background:"none"}}>Register</Link>
        </button>
    </div>
    )
}

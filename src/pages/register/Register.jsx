import "./Register.css"
import { Link } from 'react-router-dom'
export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label className="back">Username</label>
        <input className="registerInput" type="text" placeholder="Enter your username..." />
        <label className="back">Email</label>
        <input className="registerInput" type="text" placeholder="Enter your email..." />
        <label className="back">Password</label>
        <input className="registerInput" type="password" placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">
        <Link to="/login"  className='link' style={{background:"none"}}>Login</Link>
        </button>
    </div>
    )
}
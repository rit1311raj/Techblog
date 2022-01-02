import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';


export default function Topbar() {
    const user=false;
    return (
        <div className="top">
            <div className='topLeft'>
           <p className='Icon'><Link to="/" className='link' style={{background:"none"}}>Techblog</Link></p>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'><Link to="/" className='link' style={{background:"none"}}>Home</Link></li>
                    <li className='topListItem'><Link to="/" className='link' style={{background:"none"}}>About</Link></li>
                    <li className='topListItem'><Link to="/" className='link' style={{background:"none"}}>Contact</Link></li>
                    <li className='topListItem'><Link to="/write" className='link' style={{background:"none"}}>Write</Link></li>
                    <li className='topListItem'>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
            {
                user ? (
                    <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="src"
            />
                ) : (
                    <ul className='topList'>
                    <li className='topListItem'>
                    <Link to="/login" className='link' style={{background:"none"}}>Login</Link></li>
                    <li className='topListItem'>
                    <Link to="/register" className='link' style={{background:"none"}}>Register</Link></li>
                    </ul>
                )
            }
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

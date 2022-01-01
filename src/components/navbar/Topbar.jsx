import React from 'react';
import './Topbar.css';


export default function Topbar() {
    return (
        <div className="top">
            <div className='topLeft'>
           <p className='Icon'>Techblog</p>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>LogOut</li>
                </ul>
            </div>
            <div className='topRight'>
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="src"
            />
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

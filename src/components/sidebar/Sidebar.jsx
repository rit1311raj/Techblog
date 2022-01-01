import React from 'react';
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
              <span className='sidebarTitle'>ABOUT ME</span>
              <img className="img" src="https://rehan2903.github.io/cv/ritik1.jpeg" alt=""/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus esse cumque harum assumenda id voluptate.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">DSA</li>
                <li className="sidebarListItem">Web Dev</li>
                <li className="sidebarListItem">OOPs</li>
                <li className="sidebarListItem">CP</li>
                <li className="sidebarListItem">C++</li>
                <li className="sidebarListItem">DBMS</li> 
            </ul> 
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-f"></i>
            <i className="sidebarIcon fab fa-instagram"></i>
            <i className="sidebarIcon fab fa-linkedin-in"></i>
            </div>
            </div>
        </div>
    )
}

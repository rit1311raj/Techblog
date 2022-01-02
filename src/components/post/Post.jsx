import React from 'react';
import "./Post.css";
import { Link } from 'react-router-dom';
export default function Post() {
    return (
        <div className='post'>
      <img 
      className="postImg"
      src="https://enx2marketing.com/wp-content/uploads/Blogging-For-Marketing-ENX2.jpg" 
      alt="" />
      <div className="postInfo">
           <div className="postCats">
               <span className="postCat">DSA</span>
               <span className="postCat">DBMS</span>
           </div>
           <span className="postTitle">
           <Link to="/post/7" className='link' style={{background:"none"}}>TITLE</Link>
           </span>
           <hr />
           <span className="postDate">1 hr ago</span>
       </div>
       <p className="postDesc">
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim harum ipsam aliquid id officia blanditiis, alias nostrum aliquam laboriosam esse consequatur accusantium dolorum pariatur odit illum dolore qui voluptatem ullam!
       </p>
        </div>  
        
    )
}

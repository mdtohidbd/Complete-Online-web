import React from 'react';


import Blogs from '../../Blogs.json'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <>


     {/* Breadcrumb */}
      <ol className="section-banner py-3 position-relative">
        <li className="position-relative">
          <Link to="/">Home</Link>
        </li>
        <li className="position-relative active">
          <span className="ps-5">Stores</span>
        </li>
      </ol>



      <div className="row">
  {Blogs.map((blog) => (
    <div className="col-lg-4 col-md-6 mb-4" key={blog.id}>
      <div className="blog-items text-center position-relative">
        
        {/* Blog Image */}
        <div className="blog-image w-100 position-relative overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="img-fluid" 
          />
        </div>

        {/* Blog Content */}
        <div className="blog-content mt-3">
          <h5 className="blog-title">{blog.title}</h5>
          <h6 className="blog-name">{blog.name}</h6>
          <p className="blog-author">{blog.author}</p>
          <p className="blog-date">{blog.date}</p>
        </div>

      </div>
    </div>
  ))}
</div>

    
    </>
  );
}

export default Blog;

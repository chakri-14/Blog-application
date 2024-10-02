import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./css/Blogspage.css";
import { MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';

const BlogsPage = () => {
   const id = useParams().id;
   const [Blog, setBlog] = useState(null);  
   useEffect(() => {
      const fetchBlog = async () => {
         try {
            const res = await axios.get(`http://localhost:3000/api/v1/getBlog/${id}`);
            setBlog(res.data.data);
         } catch (error) {
            console.error("Error fetching the blog:", error);
         }
      };
      fetchBlog();
   }, [id]);

   return (
      <div className="page container">
         <div className="my-3">
            {Blog && Blog._id && (  
               <Link to={`/updateBlog/${Blog._id}`} className='d-flex justify-content-end edit'>
                  <MdEditSquare />
               </Link>
            )}
            {Blog ? (  
               <>
                  <h1>{Blog.title}</h1>
                  <p className="blogpagep mt-5">{Blog.desc}</p>
               </>
            ) : (
               <p>Loading...</p>  
            )}
         </div>
      </div>
   );
}

export default BlogsPage;

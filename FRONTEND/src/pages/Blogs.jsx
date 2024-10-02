import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./css/Blogs.css";
const Blogs = () => {
  const [Blogs, setBlogs] = useState() ;
  useEffect(() => {
    const fetch = async () => {
      await axios
      .get("http://localhost:3000/api/v1/get")
      .then((res)=>setBlogs(res.data.data));
    };
    fetch();
  }, []);

  return (
    <div className='bcontainer'>
       <div className="row d-flex justify-content-center my-5">
        {Blogs && 
         Blogs.map((item,i)=>(
          <div className="col-lg-3 blog-card m-3 p-3">
            <Link to={`/blogsPage/${item._id}`}><h4>{item.title}</h4></Link>{""}<p>{item.desc}</p>
          </div>
         ))}
       </div>
    </div>
  );
};

export default Blogs;

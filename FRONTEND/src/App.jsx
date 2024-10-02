import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/NAvbar';  
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Write from './pages/Write';

import BlogsPage from './Components/BlogsPage/BlogsPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />  
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Write" element={<Write  title={"Write"}/>} />
        
          <Route path="blogsPage/:id" element={<BlogsPage/>}/> 
          <Route 
          path="updateBlog/:id"
           element={<Write title={"Update"}/>}/> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;

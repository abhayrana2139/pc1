import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { Grid } from "@mui/material";

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/complaint")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blogs));
  }, []);
  console.log(blogs);
  return (
<div className="h-[350px] m-auto bg-red-60 overflow-scroll" >
<Grid container spacing={{ xs: 4, md: 10 }} columns={{ xs: 6, sm: 4, md: 14 }}>      
      
    {blogs &&
        blogs.map((blog, index) => (
          
              <Grid item xs={2} sm={2} md={4} key={index}>
      
      <Blog
            id={blog._id}
            isUser={localStorage.getItem("userId") === blog.user._id}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={blog.user.name}
            name = {blog.name}
            FaultyName={blog.FaultyName}
          />
    
    </Grid>
            
   
        
        ))}
  

      
        
    </Grid>
    </div>

  );
};

export default Blogs;

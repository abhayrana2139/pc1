import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { Grid } from "@mui/material";
const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
   
    const res = await axios
      .get(`http://localhost:5000/api/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);
  return (
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>      
      {" "}
      {user &&
        user.blogs &&
        user.blogs.map((blog, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>

          <Blog
            id={blog._id}
            key={index}
            isUser={true}
            title={blog.title}
            description={blog.description}
            imageURL={blog.image}
            userName={user.name}
          />
          </Grid>
        ))}
    </Grid>
  );
};

export default UserBlogs;

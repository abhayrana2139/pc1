import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";
const Blog = ({ title, description, imageURL, userName, name , isUser, id, FaultyName }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = () => {
    deleteRequest()
      .then(() => navigate("/"))
      .then(() => navigate("/blogs"));
  };
  return (
    <div className="h-auto">
      {" "}
      <Card
        sx={{
          height : "50%",
          width: "100%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box className="bg-red-2 right-2 top-14 relative text-right w-auto h-auto">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="warning" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="error" />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={ 
           
            <Avatar 
            name= {name}
            
              className={classes.font}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {name ? name.charAt(0) : ""}
            </Avatar>
          }
          title= {userName}
          

        
        />
        <CardMedia
          component="img"
          height="194"
          image={imageURL}
          alt="Paella dish"
        />

        <CardContent>
        <Typography 
            className= "bg-red-30 flex-col"
            variant="body2"
            color="text.secondary"
            fontFamily={"console.assert(console.assert(first, second), second)"}
            fontSize={"15px"}
          >
          <div className="flex justify-between">
          <div className="flex-col text-center">  <h1 className="bg-red-300 text-white"> VICTOMS_NAME : </h1>  <h1 className="text-xl text-black" >{name} </h1> <br></br></div>
         <div className="text-center"><h1 className="bg-red-300 text-white"> COMPLAINT_AGAINST : </h1> <h1 className=" text-xl text-black " >{FaultyName}</h1> </div>
         </div>  </Typography>
         
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
          >

            <Typography>
             <b> Complaint_titile</b> : {title}
            </Typography>
            
            <b>Description</b> {": "} {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blog;

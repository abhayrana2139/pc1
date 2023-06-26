import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LuDelete from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect, useState } from "react";
import { Button } from '@mui/material';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import SComplaints from './SComplaints';



const Complaint = ({ name, description, title, imageURL, FaultyName, id }) => {

  const navigate = useNavigate()
  const deleteRequest = async () => {
    const res = await axios
      .delete(`http://localhost:5000/api/complaint/delete/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (res) => {
    deleteRequest().then(() => alert("deleted"))


  };





  return (

    <Card sx={{
      width: "90%",
      margin: "auto",
      mt: 2,
      padding: 2,
      boxShadow: "5px 5px 10px #ccc",
      ":hover": {
        boxShadow: "10px 10px 20px #ccc",
      },
    }}>
      <CardHeader




      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />

      <CardContent>


        <Typography> <h1 className='text-black bg-red-200'>VICTOMS_NAME :</h1> {name}</Typography>
        <Typography><h1 className='text-black bg-red-200'>FaultyName :</h1> {FaultyName}</Typography>
        <Typography variant="" color="text.secondary">
          Complaint title: {title}
        </Typography>
      </CardContent>
     
      <CardContent>


        <Typography paragraph>
          Complaint Description: {description}
        </Typography>


      </CardContent>

      <Button variant='contained' onClick={handleDelete}>  delete</Button>

    </Card>




  );
};


export default Complaint
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./utils";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };
const AddBlog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
    name: "",
    FaultyName :""
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/add", {
        name : inputs.name,
  
      title: inputs.title,
        FaultyName : inputs.FaultyName,
        description: inputs.description,
        image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs"));
  };
  return (
    <div className="h-auto w-auto m-1 flex justify-center">
    <form onSubmit={handleSubmit}>
        <Box
          display={"flex"} width={"500px"} height={"auto"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} boxShadow={"10px 10px 10px 10px #ccc "} marginTop={10} marginBottom={10} marginLeft={2} marginRight={2}

        >



            <Typography
                fontSize={"20px"}
                fontWeight={"bold"}
                padding={3}
                color="grey"
                variant="h2"
                textAlign={"center"}
            >
                Add Complaint





            </Typography>
            
            
            
            
            <InputLabel >
                Name
            </InputLabel>
            <TextField
                fontSize={20}
                name="name"
                onChange={handleChange}
                value={inputs.name}
                margin="auto"
                variant="outlined"
            />


            
            <InputLabel >
               FaultyName
            </InputLabel>
            <TextField
               
                name="FaultyName"
                onChange={handleChange}
                value={inputs.FaultyName}
                margin="auto"
                variant="outlined"
            />




          
            <InputLabel >
                Title
            </InputLabel>
            <TextField

                name="title"
                onChange={handleChange}
                value={inputs.title}
                margin="auto"
                variant="outlined"
            />
            <InputLabel >
                Description
            </InputLabel>
            <TextField

                name="description"
                onChange={handleChange}
                value={inputs.description}
                margin="auto"
                variant="outlined"
            />

            <InputLabel >
                ImageURL
            </InputLabel>
            <TextField

                name="imageURL"
                onChange={handleChange}
                value={inputs.imageURL}
                margin="auto"
                variant="outlined"
            />
            <Button
                sx={{ mt: 2, borderRadius: 4 }}
                variant="contained"
                color="warning"
                type="submit"
            >
                Submit
            </Button>
        </Box>
    </form>
</div>
  
  );
};

export default AddBlog;

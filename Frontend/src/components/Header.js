import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Drawer,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./utils";
import { authActions } from "../store";
import DrawerComp from "./women/Drawer";
const Header = () => {
  const [value1, setvalue1] = useState()
  const classes = useStyles();
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);


  const [value, setValue] = useState();
  const theam = useTheme()
  const isMatch = useMediaQuery(theam.breakpoints.down("md"))


  return (
    <AppBar
      position="sticky"
      sx={{
        background: " radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(233,148,231,1) 41%, rgba(203,151,199,1) 56%)",
      }}
    >
      <Toolbar>

        <Typography>
        
        </Typography>

        {


        isMatch ? 
        <>


     
        {isLoggedIn && 
          <Box display="flex" marginLeft={2} marginRight={2}>
            <Tabs
              textColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
              
            >
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="All Complaints"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="My Complaints"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Complaints"
              />
            </Tabs>
          </Box> } 
        <DrawerComp />

       </>

       : ( <>

    { (!isLoggedIn) &&   <Box display="flex" marginLeft={'auto'}>
                            <Tabs value={value1} onChange={(e, val) => setvalue1(val)}>
                                <Tab label="Home" to="/home" component={Link} />
                                <Tab label="Laws" to="/laws" component={Link} />
                                <Tab label="Helpline" to="/Helpline" component={Link} />
                                <Tab label="SaftyTips" to="/Saftytips" component={Link} />
                                <Tab label="AboutUs" to="/Aboutus" component={Link} />
                         


  

                            </Tabs>
                        </Box>

       }

        {isLoggedIn && 

          

  

          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="primary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >

     { 

       
   
            <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs"
                label="All Complaints"
              />  

     }
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/myBlogs"
                label="My Complaints"
              />
              <Tab
                className={classes.font}
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Complaints"
              />
            </Tabs>
          </Box>
        
    }


        
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispath(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
    </> ) }
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,Tabs
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";
const pages = ["Products", "Services", "ABoutUs", "ContactUs"];
const DrawerComp2 = () => {
  const [openDrawer, setOpenDrawer] = useState(false);



  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const dispath = useDispatch()


  return (
    <React.Fragment>
      <Drawer className=""

        anchor="bottom"

        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>

          <ListItemButton >
            <ListItemIcon>
              <ListItemText>
              
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Myblogs" to="/myblogs" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Allblogs" to="/allblogs" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="addcomplaint" to="/addblog" component={Link} /><br></br>
      

                {(!isLoggedIn) && <>       <Button label="login" onClick={() => setOpenDrawer(!openDrawer)} LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadious: 10 }} color="warning">Admin</Button><br></br>

                </>}
                {(isLoggedIn) && <>     <Button variant="contained" label="logout" onClick={() => setOpenDrawer(!openDrawer)} onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1 }} color="warning">Logout</Button><br></br>
                </>}

                {(!isLoggedIn) && <Button variant="contained"  onClick={() => setOpenDrawer(!openDrawer)} label="submitCompaint" LinkComponent={Link} to="/auth"  sx={{ margin: 1 }} color="primary">Complaint_Submit2</Button>}<br></br>

              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp2;
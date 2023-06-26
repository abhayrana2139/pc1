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
const DrawerComp = () => {
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
              
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Home" to="/home" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Laws" to="/laws" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Helpline" to="/Helpline" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="SaftyTips" to="/Saftytips" component={Link} /><br></br>
                <Tab onClick={() => setOpenDrawer(!openDrawer)} label="AboutUs" to="/Aboutus" component={Link} /><br></br>
                {(isLoggedIn) && <Tab onClick={() => setOpenDrawer(!openDrawer)} label="Complaint" to="/Complaint" component={Link} />}<br></br>

                {(!isLoggedIn) && <>       <Button label="login" onClick={() => setOpenDrawer(!openDrawer)} LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1, borderRadious: 10 }} color="warning">Admin</Button><br></br>

                </>}
                {(isLoggedIn) && <>     <Button variant="contained" label="logout" onClick={() => setOpenDrawer(!openDrawer)} onClick={() => dispath(authActions.logout())} LinkComponent={Link} to="/auth" variant="contained" sx={{ margin: 1 }} color="warning">Logout</Button><br></br>
                </>}

                {(!isLoggedIn) && <Button variant="contained"  onClick={() => setOpenDrawer(!openDrawer)} label="submitCompaint" LinkComponent={Link} to="/DoDocomplaint"  sx={{ margin: 1 }} color="primary">Add Complaint</Button>}<br></br>

              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="black" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
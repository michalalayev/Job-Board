import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import navbarItems from "./navbarItems";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navbarStyles = {
    drawer: {
      width: 320,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 320,
        boxSizing: "border-box",
        backgroundColor: "#101F33",
        color: "rgba(255, 255, 255, 0.7)",
      },
      "& .Mui-selected": {
        color: "red",
      },
    },
    icons: {
      color: "rgba(255, 255, 255, 0.7)!important",
      marginLeft: "20px",
    },
    text: {
      "& span": {
        marginLeft: "-10px",
        fontWeight: "600",
        fontSize: "16px",
      },
    },
  };

  const navigate = useNavigate();

  return (
    <Drawer sx={navbarStyles.drawer} variant="permanent" anchor="left">
      <Toolbar />
      <Divider />
      <List>
        {navbarItems.map((item) => (
          <ListItem key={item.id} onClick={() => navigate(item.route)}>
            <ListItemIcon sx={navbarStyles.icons}>{item.icon}</ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Navbar;

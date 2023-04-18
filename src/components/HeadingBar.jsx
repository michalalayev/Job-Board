import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;

function HeadingBar({ open }) {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const location = useLocation();
  const path = location.pathname;
  const header = path.slice(1).charAt(0).toUpperCase() + path.slice(2);

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ marginLeft: (open ? 0 : 8), fontWeight: "bold" }}
        >
          {path === "/" ? "Jobs" : header}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HeadingBar;

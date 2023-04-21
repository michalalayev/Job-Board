import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import constants from "../constants";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: constants.drawerWidthOpen,
    width: `calc(100% - ${constants.drawerWidthOpen}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function HeadingBar({ open }) {

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

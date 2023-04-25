import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "widthOpened"
})(({ theme, open, widthOpened }) => ({
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: widthOpened,
    width: `calc(100% - ${widthOpened})`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function HeadingBar({ open, widthOpened }) {

  const location = useLocation();
  const path = location.pathname;
  const header = path.slice(1).charAt(0).toUpperCase() + path.slice(2);

  return (
    <AppBar position="fixed" open={open} widthOpened={widthOpened}>
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

HeadingBar.propTypes = {
  open: PropTypes.bool.isRequired,
  widthOpened: PropTypes.string.isRequired,
};


export default HeadingBar;

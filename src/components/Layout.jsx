import React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import HeadingBar from "./HeadingBar";
import NavDrawer from "./NavDrawer";
import Main from "./Main";
import { Toolbar } from "@mui/material";


function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      marginTop="auto"
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        My Website
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  );
}


function Layout(props) {
  const [open, setOpen] = React.useState(false);
  const widthOpened = "240px";
  const widthClosed = "65px";

  return (
    <Box>
      <HeadingBar open={open} widthOpened={widthOpened}/>
      <NavDrawer open={open} setOpen={setOpen} widthOpened={widthOpened} widthClosed={widthClosed} />
      <Main open={open} widthOpened={widthOpened} widthClosed={widthClosed}>
        <Toolbar /> {/* for blank space at the top of the page beneath the HeadingBar */}
        {props.children}
        <Copyright />
      </Main>
    </Box>
  );
}

export default Layout;

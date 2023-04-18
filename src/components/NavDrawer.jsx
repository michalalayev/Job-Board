import React from "react";
import { styled } from "@mui/material/styles"; //useTheme
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import navDrawerItems from "./navDrawerItems";
//import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HeadingBar from "./HeadingBar";
import logo from "../logo.png";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "space-between" : "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerTitle = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
      ml: "13px",
      gap: "13px",
    }}
  >
    <img src={logo} alt="logo" style={{ height: "35px" }} />
    <Typography
      variant="h5"
      noWrap
      sx={{ fontSize: "1.45rem", fontWeight: "bold" }}
    >
      Job Board
    </Typography>
  </Box>
);

function NavDrawer() {
  //const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpening() {
    setOpen((prevValue) => !prevValue);
  }
  // function handleDrawerOpen() {
  //   setOpen(true);
  // }
  // function handleDrawerClose() {
  //   setOpen(false);
  // }

  //const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = React.useState(0);

  const handleListItemClick = (event, id) => {
    setSelectedItem(id);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HeadingBar open={open} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader open={open}>
          {open && <DrawerTitle />}
          <IconButton onClick={handleDrawerOpening}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navDrawerItems.map((item) => (
            <ListItem
              key={item.id}
              disablePadding
              sx={{ display: "block" }}
              // onClick={() => navigate(item.route)}
            >
              <ListItemButton
                component={Link}
                to={item.route}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                selected={selectedItem === item.id}
                onClick={(event) => handleListItemClick(event, item.id)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {<item.icon color="primary" />}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography paragraph>the table will be here</Typography>
      </Box>
    </Box>
  );
}

export default NavDrawer;

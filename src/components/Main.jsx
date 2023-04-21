import { styled } from "@mui/material/styles";
import constants from "../constants";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `${constants.drawerWidthClosed + 1}px`,
    //marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    // [theme.breakpoints.up("sm")]: {
    //   marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    // },
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${constants.drawerWidthOpen}px`,
    }),
  }),
);

export default Main;

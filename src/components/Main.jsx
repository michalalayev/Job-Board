import { styled } from "@mui/material/styles";

const Main = styled("main", {
  shouldForwardProp: (prop) =>
    prop !== "open" && prop != "widthOpened" && prop != "widthClosed",
})(({ theme, open, widthOpened, widthClosed }) => ({
  flexGrow: 1,
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `calc(${widthClosed} - ${theme.spacing(1)})`, //`calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    marginLeft: widthClosed, //`calc(${theme.spacing(8)} + 1px)`,
  },
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: widthOpened,
    [theme.breakpoints.up("sm")]: {
      marginLeft: widthOpened,
    },
  }),
}));

export default Main;

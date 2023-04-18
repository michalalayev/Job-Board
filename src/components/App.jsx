import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import NavDrawer from "./NavDrawer";
import { Routes, Route, useLocation } from "react-router-dom";
import navDrawerItems from "./navDrawerItems";
import { useEffect } from "react";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
    },
  });

  const location = useLocation();
  const path = location.pathname;
  const appTitle = "Job Board App";
  let pageTitle = appTitle + " - ";
  if (path === "/") {
    pageTitle += "Jobs"
  } else {
    pageTitle += path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  }
  useEffect(() => { document.title = pageTitle }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <NavDrawer />
      <Routes>
        {navDrawerItems.map((item) => (
          <Route key={item.id} path={item.route} element={<item.page />} />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;

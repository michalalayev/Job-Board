import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import NavDrawer from "./NavDrawer";
import { Routes, Route } from "react-router-dom";
import navDrawerItems from "./navDrawerItems";

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: orange[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavDrawer header={"Jobs"} />
      <Routes>
        {navDrawerItems.map((item) => (
          <Route key={item.id} path={item.route} element={<item.page />} />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <h1>regular h1 Hello</h1>
          <Button variant="contained" color="primary">
            Button
          </Button>
          <Body />
          <Navbar />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

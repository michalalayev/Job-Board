import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Routes, Route, useLocation } from "react-router-dom";
import navDrawerItems from "./navDrawerItems";
import { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import Layout from "./Layout";

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
    pageTitle += "Jobs";
  } else {
    pageTitle += path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  }
  useEffect(() => {
    document.title = pageTitle;
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Routes>
          {navDrawerItems.map((item) => (
            <Route key={item.id} path={item.route} element={<item.page />} />
          ))}
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

//const [open, setOpen] = React.useState(false);

// return (
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     {/* <NavDrawer open={open} setOpen={setOpen} /> */}
//     <NavDrawer>
//       {/* <Main open={open}> */}
//       <Routes>
//         {navDrawerItems.map((item) => (
//           <Route key={item.id} path={item.route} element={<item.page />} />
//         ))}
//       </Routes>
//       {/* </Main> */}
//     </NavDrawer>
//   </ThemeProvider>
// );

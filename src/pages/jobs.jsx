import React from "react";
import MainTable from "../components/MainTable";
import Box from "@mui/material/Box";


function Jobs() {
  // put props in the ()
  return (
    <Box sx={{backgroundColor: ""}}>
      <MainTable />
      <div style={{ margin: "100px" }}>
        This is the <strong style={{ color: "blue" }}>Jobs</strong> page.
      </div>
    </Box>
  );
}

export default Jobs;

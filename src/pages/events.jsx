import { Box } from "@mui/material";
import React from "react";
import JobForm from "../components/JobForm";

function Events() {
  // put props in the ()

  return (
    <Box>
      <JobForm />
      <div style={{ margin: "100px" }}>
        This is the <strong style={{ color: "blue" }}>Events</strong> page.
      </div>
    </Box>
  );
}

export default Events;

import React from "react";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import FormTextField from "./FormTextField";

function JobForm() {
  return (
    <Box>
      <FormTextField
        label="Job Title"
        fieldId="job-title"
        defaultValue="Job Title"
      />
      <br />
      <FormTextField label="Company" fieldId="company" defaultValue="Company" />
      <br />
      <FormTextField
        label="Location"
        fieldId="location"
        defaultValue="Location"
      />
      <br />
      <FormTextField label="Status" fieldId="status" defaultValue="Wish List" />
    </Box>
  );
}

export default JobForm;

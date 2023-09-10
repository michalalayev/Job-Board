import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";

function FormTextField(props) {
  const { label, fieldId, defaultValue} = props;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "80%" }}>
      <Typography variant="body1" sx={{ textAlign: "left", fontWeight: "600" }}>
        {label}
      </Typography>
      <TextField
        sx={{ mt: "6px" }}
        id={fieldId}
        /*label="Helper text"*/
        defaultValue={defaultValue}
        // helperText="Some important text"
        variant="outlined"
      />
    </Box>
  );
}

export default FormTextField;

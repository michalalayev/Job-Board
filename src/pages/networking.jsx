import React from "react";
import Body from "../components/Body";
import { Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Networking() {
  // put props in the ()

  return (
    <>
      <div style={{ margin: "100px" }}>
        This is the <strong style={{ color: "blue" }}>Networking</strong> page.
      </div>
      <div>
        <h1>regular h1 Hello</h1>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Body />
        {/* <Navbar /> */}
        <DatePicker />
      </div>
    </>
  );
}

export default Networking;

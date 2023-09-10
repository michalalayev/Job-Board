import React from "react";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";

const statusColor = {
  Applied: "primary.light",
  "Wish List": "yellow.main",
  Interview: "warning.light",
  Terminated: "error.light",
  Offer: "success.light",
};

function StatusChip({ status }) {
  return (
    <Chip
      label={status}
      size="small"
      sx={{
        bgcolor: statusColor[status],
        "& .MuiChip-label": { color: "#fff" },
      }}
    />
  );
}

StatusChip.propTypes = {
  status: PropTypes.oneOf(Object.keys(statusColor)).isRequired,
};

export default StatusChip;

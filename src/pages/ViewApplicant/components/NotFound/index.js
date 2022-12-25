import React from "react";
import { Typography } from "@mui/material";

import "./notFound.css";

import curriculum from "../../../../images/curriculum.png";

const NoPostFound = () => {
  return (
    <div className="no-applicants-found-wrapper">
      <img src={curriculum} alt="curriculum" />
      <Typography className="content">No applications available!</Typography>
    </div>
  );
};

export default NoPostFound;

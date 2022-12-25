import React from "react";
import { Button, Typography } from "@mui/material";

import "./noPostFound.css";

import writing from "../../../../images/writing.svg";

const NoPostFound = () => {
  return (
    <div className="no-applicants-found-wrapper">
      <img src={writing} alt="writing" />
      <Typography className="content">
        Your posted jobs will show here
      </Typography>
      <Button className="button" variant="contained">
        {" "}
        Post a job
      </Button>
    </div>
  );
};

export default NoPostFound;

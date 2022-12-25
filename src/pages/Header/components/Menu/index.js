import React from "react";
import { Typography } from "@mui/material";

import "./menu.css";

const Menu = ({ onClick }) => {
  return (
    <div onClick={onClick} className="logout-menu">
      <Typography className="logout-button">Logout</Typography>
    </div>
  );
};

export default Menu;

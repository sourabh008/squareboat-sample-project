import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import "./cardBox.css";

import locationIcon from "../../images/locationIcon.svg";
const CardBox = ({
  primaryFontSize,
  color,
  actions,
  primaryContent,
  secondryContent,
  primaryContentWidth,
  location,
  handleClick,
  id,
}) => {
  return (
    <Box className="job-card" sx={{ boxShadow: "0px 3px 6px #557DA526" }}>
      <Card variant="outlined">
        <CardContent sx={{ minHeight: 90 }}>
          <Typography
            className="primary-content"
            sx={{
              fontSize: primaryFontSize ? primaryFontSize : 20,
              width: primaryContentWidth ? primaryContentWidth : 150,
            }}
            color={color ? color : "#1976d2"}
            gutterBottom
          >
            {primaryContent}
          </Typography>
          <div className="secondry-content" variant="body2">
            {secondryContent}
          </div>
        </CardContent>
        <CardActions>
          {actions && (
            <div className="card-action">
              <div className="location-icon">
                <img src={locationIcon} alt="location" />
                <p>{location}</p>
              </div>
              <Button onClick={handleClick(id)} className="button">
                View Application
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardBox;

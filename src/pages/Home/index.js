import React from "react";
import { Button } from "@mui/material";

import "./home.css";

import Header from "../Header";
import HomeImage from "../../images/homeImage.png";
import CardBox from "../../components/CardBox";

import image1 from "../../images/goldline.png";
import image2 from "../../images/kanba.png";
import image3 from "../../images/lighting.png";
import image4 from "../../images/liva.png";
import image5 from "../../images/solaytic.png";
import image6 from "../../images/velocity.png";
import image7 from "../../images/ztos.png";

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <Header />
        <hr className="header-baseline" />
        <div className="top-section-content">
          <div className="content">
            <h1>
              Welcome to <span>My</span>
              <span className="jobs">Jobs</span>
            </h1>
            <Button className="home-button" variant="contained">
              Get Started
            </Button>
          </div>
          <img className="home-image" src={HomeImage} alt="home" />
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-content">
          <h3>Why Us</h3>
          <div className="cards">
            <CardBox
              width={300}
              primaryContent="Get More Visibility"
              secondryContent="Lorazepam 1mg Tablets contain 1mg of the active ingredient lorazepam."
            />
            <CardBox
              width={300}
              primaryContent="Get More Visibility"
              secondryContent="Lorazepam 1mg Tablets contain 1mg of the active ingredient lorazepam."
            />
            <CardBox
              width={300}
              primaryContent="Get More Visibility"
              secondryContent="Lorazepam 1mg Tablets contain 1mg of the active ingredient lorazepam."
            />
          </div>
        </div>
        <div className="promotion-section">
          <h3>Why Us</h3>
          <div className="promotion-images">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
            <img src={image5} alt="image5" />
            <img src={image6} alt="image6" />
            <img src={image7} alt="image7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

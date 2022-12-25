import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import TextField from "../../components/TextField";
import Header from "../Header";

import "../Home/home.css";
import "./login.css";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Login = () => {
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
  const [showError, setShowError] = useState({
    passwaordError: "",
    emailError: "",
  });

  const handleLogin = async () => {
    if (!showError.emailError && !showError?.passwaordError) {
      try {
        const data = await axios.post(
          "https://jobs-api.squareboat.info/api/v1/auth/login",
          loginData
        );
        if (data?.data?.code) {
          localStorage.setItem("userData", JSON.stringify(data?.data));
          toast("You have successfully logged in");
          history.push("/jobs");
        }
      } catch (err) {
        setShowError({
          ...showError,
          passwaordError: "Wrong email or password",
        });
      }
    }
  };

  const handleChange = (e) => {
    setShowError({ ...showError, passwaordError: "" });
    if (e.target.name === "email") {
      if (emailRegex.test(e.target.value)) {
        setShowError({ ...showError, emailError: "" });
      } else {
        setShowError({ ...showError, emailError: "Enter avild email" });
      }
    }
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <div className="login-page">
      <div className="top-section">
        <Header />
        <hr className="header-baseline" />
      </div>
      <div className="login-form">
        <Typography className="login-heading">Login</Typography>
        <TextField
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
          label="Email address"
          inputType="email"
          error={showError?.emailError}
        />
        <TextField
          onChange={handleChange}
          name="password"
          placeholder="Enter your password"
          label="Password"
          inputType="password"
          error={showError?.passwaordError}
        />
        <Button onClick={handleLogin} className="button" variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};
export default Login;

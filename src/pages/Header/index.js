import React, { useCallback, useState } from "react";

import "./header.css";

import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Menu from "./components/Menu";
import dropDownImage from "../../images/dropdown.svg";
import useGetUserData from "../../components/hooks/useGetUserData";

const Header = () => {
  const [showLogoutMenu, setShowLogoutMenu] = useState(false);
  const [userData, , setUserData] = useGetUserData();

  const history = useHistory();

  const toggleLogoutButton = useCallback(() => {
    setShowLogoutMenu(!showLogoutMenu);
  }, [showLogoutMenu]);

  const handleLogout = () => {
    setUserData("");
    toast("You have successfully logged out.");
    history.push("/");
  };

  const handleLoginClick = () => {
    history.push("/login");
  };

  const handleClick=()=>{
    history.push('/jobs')
  }
  return (
    <div className="header">
      <div onClick={handleClick} className="left-container">
        My<span>Jobs</span>
      </div>
      <div>
        {!userData?.id ? (
          <Button
            className="login-button"
            onClick={handleLoginClick}
            variant="contained"
          >
            Login
          </Button>
        ) : (
          <div className="profile">
            <Avatar sx={{ bgcolor: "#D9EFFF" }}>{userData?.name[0]}</Avatar>
            <div className="logoutIcon" onClick={toggleLogoutButton}>
              <img src={dropDownImage} alt="dropdown" />
              {showLogoutMenu && <Menu onClick={handleLogout} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;

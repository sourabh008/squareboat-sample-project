import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";

import "../Home/home.css";
import "./jobPosts.css";

import Header from "../Header";
import JobList from "./components/JobList/index.js";
import homeIcon from "../../images/home.svg";
import NoPostFound from "./components/NoPostFound";
import useGetUserData from "../../components/hooks/useGetUserData";
import ViewApplicants from "../ViewApplicant";
import Pagination from "./components/Pagination";
import { baseUrl, jobs } from "../../utils/api";

const JobPosts = () => {
  const [data, token] = useGetUserData();
  const [openJob, setopenJob] = useState({ isOpen: false, id: "" });
  const [pageNumber, setpageNumber] = useState(1);
  const history = useHistory();

  const [postsData, setPostsData] = useState({ posts: [], pages: 0 });

  useEffect(() => {
    if (!data) {
      history.push("/login");
      return;
    }
    (async function () {
      try {
        let data = {};
        if (pageNumber === 1) {
          data = await axios.get(baseUrl + jobs, {
            headers: {
              Authorization: token,
            },
          });
        } else {
          data = await axios.get(`${baseUrl + jobs}?page=${pageNumber}`, {
            headers: {
              Authorization: token,
            },
          });
        }
        const postsData = data?.data?.data || data?.data;
        const formatedData = {
          posts: postsData.data,
          pages: Math.round(
            postsData?.metadata?.count / postsData?.metadata?.limit
          ),
        };

        setPostsData({ ...formatedData });
      } catch (err) {
        setPostsData({ posts: [], limit: 0 });
      }
    })();
  }, [pageNumber]);

  const handleDecrement = () => {
    setpageNumber(pageNumber - 1);
  };
  const handleIncrement = () => {
    setpageNumber(pageNumber + 1);
  };

  const handleNavClick = () => {
    history.push("/");
  };

  const handleJobClick =
    (id = "") =>
    () => {
      setopenJob({ isOpen: !openJob.isOpen, id: id });
    };

  return (
    <div className="job-posts">
      <ToastContainer />
      <div className="top-section">
        <Header />
        <hr className="header-baseline" />
      </div>
      <div className="bottom-section">
        <ViewApplicants open={openJob} handleClose={handleJobClick} />
        <div className="job-list-wrapper">
          <div onClick={handleNavClick} className="home-nav">
            <img alt="homeIcon" src={homeIcon} />
            <Typography className="home-nav-button">Home</Typography>
          </div>
          <Typography className="job-list-title">Jobs posted by you</Typography>
          {postsData.posts.length ? (
            <>
              <JobList
                handleClick={handleJobClick}
                posts={postsData.posts.slice(0, 12)}
              />
              <Pagination
                count={pageNumber}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
                totalPages={postsData.pages}
                shape="rounded"
              />
            </>
          ) : (
            ""
          )}
        </div>
        {!postsData.posts.length ? <NoPostFound /> : <div></div>}
      </div>
    </div>
  );
};
export default JobPosts;

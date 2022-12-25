import React, { useEffect, useState } from "react";
import { Backdrop, Popover } from "@mui/material";
import axios from "axios";

import useGetUserData from "../../components/hooks/useGetUserData";
import crossIcon from "../../images/crossIcon.png";
import { baseUrl, jobCandidates } from "../../utils/api";
import ApplicantsCard from "./components/ApplicantsCard";
import NoPostFound from "./components/NotFound";

import "./viewApplicants.css";

const ViewApplicants = ({ handleClose, open }) => {
  const [, token] = useGetUserData();
  const [candidates, setCandidatesData] = useState([]);

  useEffect(() => {
    if (open?.id) {
      (async function () {
        try {
          const data = await axios.get(
            `${baseUrl + jobCandidates}/${open?.id}/candidates`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          setCandidatesData(data?.data?.data || data?.data);
        } catch (err) {
          setCandidatesData([]);
          console.log("error", err);
        }
      })();
    }
  }, [open?.isOpen]);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open?.isOpen}
      onClick={handleClose()}
    >
      <Popover
        open={open?.isOpen}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <div className="View-applicants">
          <div className="popup-content">
            <div className="popup-header">
              <div className="popup-heading">Applicants for the job</div>
              <img src={crossIcon} alt="cross-icon" />
            </div>
            <hr className="popup-baseline" />
            <div className="applicants-count">
              Totle {candidates.length} applicants
            </div>
            <div className="applicants-wrapper">
              {candidates.length ? (
                candidates.map((item) => {
                  return <ApplicantsCard candidate={item} />;
                })
              ) : (
                <NoPostFound />
              )}
            </div>
          </div>
        </div>
      </Popover>
    </Backdrop>
  );
};
export default ViewApplicants;

import React from "react";

import CardBox from "../../../../components/CardBox";

import "./jobList.css";

const jobList = ({ posts, handleClick }) => {
  return (
    <div className="job-list">
      {posts?.map((item) => {
        return (
          <CardBox
            width={303}
            primaryContent={item?.title}
            secondryContent={item?.description}
            primaryContentWidth={"100%"}
            actions
            location={item?.location}
            handleClick={handleClick}
            id={item.id}
          />
        );
      })}
    </div>
  );
};
export default jobList;

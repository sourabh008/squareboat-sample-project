import React from "react";

import "./pagination.css";

import fadeOutImage from "../../../../images/Prev.svg";
import activeImage from "../../../../images/Nex.svg";

const Pagination = ({
  count = 1,
  handleIncrement,
  handleDecrement,
  totalPages,
}) => {
  return (
    <div className="pagination">
      <img
        onClick={count === 1 ? () => {} : handleDecrement}
        src={count === 1 ? fadeOutImage : activeImage}
        alt="decrement"
      />
      <div>
        <p>{count}</p>
      </div>
      <img
        onClick={count === totalPages ? () => {} : handleIncrement}
        src={count === totalPages ? fadeOutImage : activeImage}
        alt="increment"
      />
    </div>
  );
};
export default Pagination;

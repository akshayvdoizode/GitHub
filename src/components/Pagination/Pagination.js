import React from "react";
import "./Pagination.css";

const Pagination = ({ repoPerPage, totalRepo, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalRepo / repoPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "whiteSmoke",
        padding: 10,
      }}
    >
      {pageNumber.map((number) => (
        <div className="pagination">
          {/* eslint-disable-next-line */}
          <a key={number} onClick={() => paginate(number)}>
            {number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;

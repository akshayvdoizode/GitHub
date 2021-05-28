import React from "react";

const Repo = ({ repo }) => {
  return (
    <>
      <div className="card">
        <h3>
          <a href={repo?.clone_url}>{repo?.full_name}</a>
        </h3>
      </div>
    </>
  );
};

export default Repo;

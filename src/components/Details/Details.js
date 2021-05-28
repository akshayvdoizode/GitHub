import React, { Fragment, useState } from "react";
import "./Details.css";
import Pagination from "../Pagination/Pagination";
import Repo from "./Repo";

const Detail = ({ data, repo }) => {
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [repoPerPage] = useState(5);

  const indexOfLastRepo = currentPage * repoPerPage;
  const indexOfFirstRepo = indexOfLastRepo - repoPerPage;
  const currentRepo = repo.slice(indexOfFirstRepo, indexOfLastRepo);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Fragment>
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2" style={{ textAlign: "center" }}>
        <div className="all-center">
          <img
            src={avatar_url}
            alt="avatar"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div style={{ marginTop: 45 }}>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website:</strong>{" "}
                  <a
                    href={
                      blog.includes("http://") || blog.includes("https://")
                        ? blog
                        : `//${blog}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {blog}
                  </a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">
          Public Repositories: {public_repos}
        </div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Pagination
        repoPerPage={repoPerPage}
        totalRepo={repo.length}
        paginate={paginate}
      />
      {currentRepo.map((repo) => (
        <>
          <Repo repo={repo} />
        </>
      ))}
    </Fragment>
  );
};

export default Detail;

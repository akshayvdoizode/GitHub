import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
const Navbar = ({ navDetail, navLink, user, redirect }) => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header" style={{ margin: 20 }}>
        <div className="nav-title">GitHub Search</div>
      </div>

      <div className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link
          style={{ marginTop: "-2px", color: "whitesmoke" }}
          className="back"
          to={navLink}
        >
          {navDetail}
        </Link>
        <p
          style={{
            letterSpacing: "1px",
            color: "white",
            display: "flex",
            alignItems: "center",
            marginTop: -27,
            textTransform: "capitalize",
          }}
        >
          Welcome, <strong>{user?.displayName}</strong>{" "}
          <Avatar
            src={user?.photoURL}
            type="submit"
            style={{ marginLeft: 20, cursor: "pointer" }}
          />
          <Link to="/">
            <strong style={{ margin: 10 }}>{redirect}</strong>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;

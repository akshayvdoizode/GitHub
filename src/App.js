import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Error404 from "./components/Error/Error404";
import Home from "./components/Home/Home.js";
import Detail from "./components/Details/Details.js";
import Login from "./components/Login/Login";
import { useStateValue } from "./DataLayer";
const App = () => {
  const [search, setSearch] = useState("");
  const [repo, setRepo] = useState([]);
  const [userRepo, setUserRepo] = useState([]);
  const [{ user }] = useStateValue();

  const searchUser = () => {
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
      });
    fetch(`https://api.github.com/users/${search}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setUserRepo(data);
      });
  };

  return (
    <Router>
      <Switch>
        <div>
          {!user ? (
            <>
              <Route path="/" exact={true}>
                <Login />
              </Route>
              <Route path="/user" exact={true}>
                <Error404 />
              </Route>
            </>
          ) : (
            <>
              <Route path="/" exact={true}>
                <Navbar user={user} />
                <Home
                  searchInput={search}
                  handleChange={(e) => setSearch(e.target.value)}
                  repo={repo}
                  clear={() => {
                    setRepo([]);
                    setSearch("");
                  }}
                  handleClick={searchUser}
                />
              </Route>
              {repo.length === 0 ? (
                <Route path="/user" exact={true}>
                  <Error404 />
                </Route>
              ) : (
                <Route path="/user" exact={true}>
                  <Navbar user={user} redirect="go back" />
                  <Detail data={repo} repo={userRepo} />
                </Route>
              )}
            </>
          )}
        </div>
      </Switch>
    </Router>
  );
};

export default App;

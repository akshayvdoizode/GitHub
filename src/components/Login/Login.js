import React from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../DataLayer";
import { auth, provider } from "../../firebase/firebase";
import "./Login.css";

function Login() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({
          type: "SET_USER",
          user: res.user,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to Github Search</h1>
        </div>
        <Button onClick={login}>Sign Into Github Search</Button>
      </div>
    </div>
  );
}

export default Login;

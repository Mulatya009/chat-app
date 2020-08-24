import React from "react";
import "./Login.css";
import { Button, Card } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((results) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: results.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Card>
        <div className="login__container">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div className="login__text">
            <h1>Sign in to ChatApp</h1>
          </div>

          <Button onClick={signIn}>Sign In With Google</Button>
        </div>
      </Card>
    </div>
  );
}

export default Login;

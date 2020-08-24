import React from "react";
import "./HomeScreen.css";
import { Button } from "@material-ui/core";
import createChat from "./utils";

function HomeScreen() {
  return (
    <div className="homescreen">
      <div className="homescreen__container">
        <div className="homescreen__text">
          <img
            className="homescreen__logo"
            src="https://i.pinimg.com/originals/60/d4/d3/60d4d31e4f2b18abaee11da6281ff6ea.png"
            alt=""
          />
          <h2>Keep your internet connected</h2>
          <p>Chat App Let's Connect</p>
        </div>
        <Button onClick={createChat}>Add a new Chat</Button>
      </div>
    </div>
  );
}

export default HomeScreen;

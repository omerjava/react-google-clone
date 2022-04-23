import React from "react";
import "./Main.css";
import { useState } from "react";
import Button from "../button/Button";

function Main() {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    return;
  };

  return (
    <div className="main">
      <div className="top">
        <div className="google-photo"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formDiv1">
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="formDiv2">
          <Button name="Google Search" type="submit" />
          <Button name="I'm Feeling Lucky" type="click" />
        </div>
      </form>
    </div>
  );
}

export default Main;

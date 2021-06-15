import React, { useState } from "react";
import classes from "./LandingPage.module.css";

function LandingPage(props) {
  const [userName, setUserName] = useState();
  const [userPassword, setPassword] = useState();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  function handleSubmit(event) {
    localStorage.setItem(
      "user",
      JSON.stringify({ username: userName, password: userPassword })
    );
    props.updateUserArray({ username: userName, password: userPassword });
  }
  return (
    <div>
      <div className={classes.margin}>Register:</div>
      <form onSubmit={handleSubmit}>
        <div className={classes.margin}>
          <label>
            Username:
            <input
              type="text"
              value={userName}
              onChange={handleUserNameChange}
            />
          </label>
        </div>
        <div className={classes.margin}>
          <label>
            Password:
            <input
              type="text"
              value={userPassword}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default LandingPage;

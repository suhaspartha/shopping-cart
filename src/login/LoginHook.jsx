import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import HomePage from "../home/Home";

const LoginHook = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("Hello!");
  const [loggedIn, setLoggedIn] = useState(false);

  const updatePass = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default
    setWelcomeMsg("Hello " + userName + "!");
    setLoggedIn(!loggedIn);
  };

  // empty dependancy called only once => componentDidMount
  // When you have dependancy state in array this is called on any change occuring on dependancies mentioned in dependancy array => componentDidUpdate
  useEffect(() => {
    console.log("use effect empty dependancy");
  }, []);

  console.log(loggedIn);
  return (
    <>
      {!loggedIn && (
        <div className="login">
          <h1>{welcomeMsg}</h1>

          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
              "& button": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Username"
                defaultValue={userName}
                onChange={(event) => setUserName(event.target.value)}
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                defaultValue={password}
                onChange={updatePass}
              />
              <Button
                variant="outlined"
                size="large"
                onClick={handleSubmit}
                className="login"
              >
                Submit
              </Button>
            </div>
          </Box>
        </div>
      )}
      {loggedIn && <HomePage welcome="This is homepage!" />}
    </>
  );
};

export default LoginHook;

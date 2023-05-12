import { useState, useEffect } from "react";

const LoginHook = ({ name }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("Welcome");

  const updatePass = (event) => {
    setPassword(event.target.value);
  };

  // empty dependancy called only once => componentDidMount
  useEffect(() => {
    console.log("use effect empty dependancy");
    setWelcomeMsg(welcomeMsg + name);
  }, []);

  // called on any change occuring on dependancies mentioned in dependancy array => componentDidUpdate
  useEffect(() => {
    console.log("use effect username dependancy");
    setUserName("userName");
  }, [userName, password]);

  return (
    <>
      <h1>{welcomeMsg}</h1>
      <form
        onSubmit={(event) => {
          console.log(event);
          event.preventDefault(); // prevent default
          setWelcomeMsg(welcomeMsg + name);
        }}
      >
        <input
          id="username"
          placeholder="Enter username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={updatePass}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default LoginHook;

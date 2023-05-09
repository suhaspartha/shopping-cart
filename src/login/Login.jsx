import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { welcome: "Hello", username: "init val", password: "pass" };
    this.updatePass = this.updatePass.bind(this);
  }
  componentDidMount() {
    console.log("component mounted");
  }

  componentDidUpdate() {
    console.log("component updated");
    console.log(this.state);
  }

  updatePass(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    return (
      <>
        <h1>{this.state.welcome}</h1>
        <form
          onSubmit={(event) => {
            console.log(event);
            event.preventDefault(); // prevent default
            this.setState({ welcome: `Hello ${this.props.name}` });
          }}
        >
          <input
            id="username"
            placeholder="Enter username"
            value={this.state.username}
            onChange={(event) =>
              this.setState({ username: event.target.value })
            }
          />
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.updatePass}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export const someVar = "var val";

export default Login;

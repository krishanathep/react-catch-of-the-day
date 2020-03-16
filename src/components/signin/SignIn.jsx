import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase";
import Signup from "./Signup";

export class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h1 className="text-uppercase" align="center">
          Sign In
        </h1>
        <div className="row">
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h3 className="card-title">I already have an account</h3>
                <p className="card-text">
                  Sign in with your email and password
                </p>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div className="label">Email</div>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Email..."
                    />
                  </div>
                  <div className="form-group">
                    <div className="label">Password</div>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={this.state.password}
                      onChange={this.handleChange}
                      placeholder="Password..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-1"
                      value="SIGN IN"
                    >
                    <i class="far fa-envelope"></i> SIGN IN WITH EMAIL
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={signInWithGoogle}
                      className="btn btn-danger btn-block"
                    >
                      <i class="fab fa-google"></i> SIGN IN WITH GOOGLE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Signup />
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

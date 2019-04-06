import React, { Component } from "react";
import { Redirect } from "react-router-dom";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      uname: "",
      pass: "",
      loggedIn
    };
  }
  handleChange = e => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { uname, pass } = this.state;
    if (uname === "admin" && pass === "admin") {
      localStorage.setItem("token", "jdqiowuowqfkqwoijfoq");
      localStorage.setItem("uname", this.state.uname);
      this.setState({ loggedIn: true });
    }
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin" />;
    }
    return (
      <div>
        <div className="container">
          <div className="row" style={{ paddingTop: "100px" }}>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <div className="card card-signin my-5">
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <label htmlFor="inputEmail">Email address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="uname"
                        placeholder="Email address"
                        value={this.state.uname}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="form-label-group">
                      <label htmlFor="inputPassword">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="pass"
                        value={this.state.pass}
                        onChange={this.handleChange}
                        placeholder="Password"
                      />
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

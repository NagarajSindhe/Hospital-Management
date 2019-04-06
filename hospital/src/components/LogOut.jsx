import React, { Component } from "react";
import { Link } from "react-router-dom";
class LogOut extends Component {
  constructor(props) {
    super(props);
    localStorage.removeItem("token");
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>You have logged out succesfully</p>
        <Link to="/">Login again</Link>
      </div>
    );
  }
}

export default LogOut;

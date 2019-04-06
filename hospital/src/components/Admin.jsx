import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Hospital from "./Hospital";
import DialogModal from "./DialogModal";
let bodyStyles = {
  margin: "0",
  padding: "0"
};
class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      uname: localStorage.getItem("uname"),
      isOpen: false,
      data: [],
      fruits: [
        {
          num: 7,
          str: "Örange"
        },
        {
          num: 2,
          str: "Banana"
        },
        {
          num: 4,
          str: "Dry Fruit"
        },
        {
          num: 3,
          str: "cashwenut"
        }
      ]
    };
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleClose = () => {
    this.setState({ isOpen: false });
  };
  handleOnchange = e => {
    alert(e.target.value);
    // this.setState({ [e.target.name]: e.target.value });
    this.setState({ uname: e.target.value });
    this.setState({ data: this.state.uname });
  };

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div class="container ">
        <i
          onClick={this.handleToggle}
          className="fas fa-trash-alt text-danger"
        />
        {this.state.isOpen ? (
          <div className="modal-content">
            <div class="modal-header bg-dark">
              <h5 className="modal-title" style={{ color: "white" }}>
                Modal Header
              </h5>
              <i
                class="fas fa-times-circle text-white"
                onClick={this.handleClose}
              />
              {/* <button
                onClick={this.handleClose}
                className="close"
                style={{ color: "white" }}
              >
                x
              </button> */}
            </div>
            <div class="container bg-white">
              <form action="/action_page.php">
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" id="pwd" />
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-sm btn-primary m-1">
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={this.handleClose}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        ) : null}

        {/*     {this.state.data.map(c => (
          <ul>
            <li>{c.name}</li>
          </ul>
        ))} */}
        {/* {this.state.data.uname}
        <input type="text" name="uname" value={this.state.data.name} />
        <button onClick={this.handleOnchange}>Add</button> */}
        {/* 
        <button
          data-toggle="modal"
          data-target="#myModal"
          class="btn btn-info btn-lg"
          onClick={e => {
            this.setState({ isOpen: true });
          }}
        >
          Open Dialog
        </button>

        <DialogModal
          isOpen={this.state.isOpen}
          onClose={e => this.setState({ isOpen: false })}
        >
          <div class="container bg-white">
            <form action="/action_page.php">
              <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" />
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-sm btn-primary m-1">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                onClick={e => this.setState({ isOpen: false })}
              >
                Cancel
              </button>
            </form>
            <Hospital />
          </div>
        </DialogModal>
 */}
      </div>
    );
  }
}

export default Admin;

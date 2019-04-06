import React, { Component } from "react";
import Modal from "./Modal";
import "../App.css";
import AddPatients from "./AddPatients";

class Examples extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <main>
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <AddPatients />
          </Modal>
          <button type="button" onClick={this.showModal} />
        </main>
      </div>
    );
  }
}

export default Examples;

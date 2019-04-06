import React, { Component } from "react";
import { white } from "material-ui/styles/colors";

let dialogStyles = {
  width: "500px",
  maxWidth: "100%",
  margin: "0 auto",
  positon: "fixed",
  /*  paddingleft: "50%",
  paddingTop: "50%", */
  borderRadius: "8px",
  backgroundColor: "#eee",
  transform: "translate(-50%, -50%)",
  zIndex: "999",
  padding: "10px 20x 40px",
  display: "flex",
  flexDirection: "column" /* ,
  textAlign: "center" */
};
let DialogCloseButtonStyles = {
  marginBottom: "15px",
  padding: "3px 8px",
  cursor: "pointer",
  borderRadius: "50%",
  border: "none",
  height: "30px",
  width: "30px",
  /*  textAlign: "center", */
  fontWight: "bold",
  alignSelf: "flex-end"
};
class DialogModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let dialog = (
      <div className="modal-content   ">
        <div class="modal-header bg-primary">
          <h5 className="modal-title" style={{ color: white }}>
            Modal Header
          </h5>

          <button
            onClick={this.props.onClose}
            className="close"
            style={{ color: white }}
          >
            x
          </button>
        </div>
        <div class="modal-body">{this.props.children}</div>
      </div>
    );
    if (!this.props.isOpen) {
      dialog = null;
    }
    return <div className="container ">{dialog}</div>;
  }
}

export default DialogModal;

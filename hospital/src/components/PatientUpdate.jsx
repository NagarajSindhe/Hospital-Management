import React, { Component } from "react";
import Hospital from "./Hospital";
//import Button from "react-bootstrap/Button";

class PatientUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", desc: "", url: "", show: false };
    //this.handleSubmit = this.handleSubmit.bind(this);https://codereviewvideos.com/course/symfony-3-with-reactjs-and-angular/video/react-update-put-patch
  }
  handlClose = e => {
    this.setState({ show: this.props.open });
  };
  componentWillMount = () => {
    if (localStorage.getItem("id")) {
      this.setState({ id: parseInt(localStorage.getItem("id")) });
    }
    if (localStorage.getItem("title")) {
      this.setState({ name: localStorage.getItem("title") });
    }
    if (localStorage.getItem("description")) {
      this.setState({ desc: localStorage.getItem("description") });
    }
    if (localStorage.getItem("url")) {
      this.setState({ url: localStorage.getItem("url") });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:8086/JAXRS-RESTEasyCruds/rest/records/userUpdate`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: this.state.id,
        title: event.target.elements.title.value,
        description: this.state.desc,
        url: this.state.url
      })
    })
      .then(function(response) {
        console.log(response);
        alert("Record Updated Successfully");
        return <Hospital />;
      })
      .catch(function(error) {
        console.log(error);
      });
    //window.location.reload();
  };
  render() {
    return (
      <div className="col-sm-12">
        <form
          name="blog_post"
          className="form-horizontal"
          onSubmit={this.handleSubmit}
        >
          <div id="blog_post">
            <div className="form-group">
              <label
                hidden
                className="col-sm-4 control-label required"
                htmlFor="blog_post_title"
              >
                Id
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  hidden
                  // onChange={e => this.setState({ name: e.target.value })}
                  required="required"
                  className="form-control"
                  value={this.state.id}
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="col-sm-4 control-label required"
                htmlFor="blog_post_title"
              >
                Patient Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onChange={e => this.setState({ name: e.target.value })}
                  required="required"
                  name="title"
                  className="form-control"
                  value={this.state.name}
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="col-sm-6 control-label required"
                htmlFor="blog_post_body"
              >
                Patient age
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onChange={e => this.setState({ desc: e.target.value })}
                  required="required"
                  className="form-control"
                  value={this.state.desc}
                />
              </div>
            </div>
            <div className="form-group">
              <label
                className="col-sm-4 control-label required"
                htmlFor="blog_post_body"
              >
                Patient Address
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  onChange={e => this.setState({ url: e.target.value })}
                  required="required"
                  className="form-control"
                  value={this.state.url}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-2" />
              <div className="col-sm-10">
                <button
                  type="submit"
                  id="blog_post_submit"
                  className="btn-primary btn m-1"
                >
                  Update
                </button>
                <button
                  type="button"
                  id="blog_post_submit"
                  className="btn-danger btn m-2"
                  onClick={this.handlClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PatientUpdate;

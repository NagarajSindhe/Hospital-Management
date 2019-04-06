import React from "react";
import { Link } from "react-router-dom";
const SearchForm = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <Link className="navbar-brand text-white font-weight-bold" to="/admin">
          Patient Tracking System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              {/* <a className="nav-link text-white" href="#">
                Home <span className="sr-only">(current)</span>
              </a> */}
            </li>
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">
                Disabled
              </a>
            </li> */}
          </ul>
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={props.getRecordsById}
          >
            <input
              className="form-control mr-sm-2"
              name="recipeName"
              type="search"
              placeholder="Search By Patient Id"
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          <div className="row text-white col-sm-6">
            <div className="col-sm-6" />
            <div className="col-sm-6">
              Welcome {localStorage.getItem("uname")}{" "}
              <Link to="/logout" className="text-white">
                Log Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <form onSubmit={props.getRecordsById} style={{ marginBottom: "2rem" }}>
        <input
          classNameName="form__input text text-dark m-2"
          type="text"
          name="recipeName"
          placeholder="Search By Patient Id"
        />
        <button classNameName="btn btn-primary btn-sm">Search</button>
      </form> */}
    </div>
  );
};
export default SearchForm;

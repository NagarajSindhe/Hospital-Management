import React, { Component } from "react";
//import "./App.css";
import SearchForm from "./SearchForm";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import PatientModal from "./PatientModal";
//import PatientUpdate from "./PatientUpdate";
import PatientUpdateModal from "./PatientUpdateModal";
import { Redirect } from "react-router-dom";
//import Examples from "./Examples";
const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    Showing {from} to {to} of {size} Results
  </span>
);

class Hospital extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token === null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
      product: [],
      columns: [
        {
          dataField: "id",
          text: "Patient Id",
          sort: true,
          sortCaret: (order, column) => {
            if (!order) return <i className="fas fa-sort" />;
            if (order === "asc") return <i className="fas fa-sort-up" />;
            if (order === "desc") return <i className="fas fa-sort-down" />;
            return null;
          },
          headerStyle: {
            backgroundColor: "#1E90FF"
          }
        },
        {
          dataField: "title",
          text: "Patient Name",
          headerStyle: {
            backgroundColor: "#1E90FF"
          }
        },
        {
          dataField: "description",
          text: "Age",
          headerStyle: {
            backgroundColor: "#1E90FF"
          }
        },
        {
          dataField: "url",
          text: "Phone Number",
          headerStyle: {
            backgroundColor: "#1E90FF"
          }
        },
        {
          dataField: "address",
          text: "Patient Address",
          headerStyle: {
            backgroundColor: "#1E90FF"
          }
        },
        {
          dataField: "Edit",
          text: "Edit",
          formatter: (cellContent, row, event) => (
            <div>
              <i onClick={this.handleEdit.bind(this, row)}>
                <PatientUpdateModal />
              </i>
            </div>
          ),
          headerStyle: {
            backgroundColor: "#1E90FF"
          }
        },
        {
          dataField: "Delete",
          text: "Delete",
          formatter: (cellContent, row, event) => (
            <div>
              <i
                className="fas fa-trash-alt"
                onClick={this.handleDelete.bind(this, row)}
              />
            </div>
          ),
          headerStyle: {
            backgroundColor: "#1E90FF"
          }
        }
      ]
    };
    this.getAllRecords();
  }
  getAllRecords = async () => {
    const url = `http://127.0.0.1:8086/JAXRS-RESTEasyCruds/rest/records/getAll/Records`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({ product: data });
  };
  getRecordsById = async e => {
    const id = e.target.elements.recipeName.value;
    e.preventDefault();
    id.length === 0 ? alert("Please enter Id") : this.searchById(id);
  };
  searchById = async e => {
    const id = e;
    const url = `http://127.0.0.1:8086/JAXRS-RESTEasyCruds/rest/records/getById/${id}`;
    const api_call = await fetch(url);
    const data = await api_call.json();
    this.setState({ product: data });
  };
  handleDelete = async row => {
    const index = row.id;
    const dlt = `http://localhost:8086/JAXRS-RESTEasyCruds/rest/records/delete/${index}`;
    //window.location.reload();
    row.id.length === 0
      ? this.getAllRecords()
      : fetch(dlt, {
          method: "DELETE"
        })
          .then(results => results.json())
          .then(data => {
            console.log(data);
            this.getAllRecords();
          })
          .catch(error => {
            this.setState({ error: "Error occured while deleting records" });
          });
  };
  handleEdit = async cellContent => {
    //alert(cellContent.title);localStorage.clear();

    localStorage.setItem("id", cellContent.id);
    localStorage.setItem("title", cellContent.title);
    localStorage.setItem("description", cellContent.description);
    localStorage.setItem("url", cellContent.url);
    localStorage.setItem("get", this.getAllRecords());
  };
  /* componentWillMount = () => {
    localStorage.clear();
    this.getAllRecords();
  }; */
  /* componentWillUpdate = () => {
    localStorage.clear();
    this.getAllRecords();
  }; */

  indication = () => {
    return "No Records Found";
  };

  render() {
    const options = {
      paginationSize: 4,
      pageStartIndex: 1,
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      paginationTotalRenderer: customTotal,
      sizePerPageList: [
        {
          text: 4,
          value: 4
        },
        {
          text: "6",
          value: 6
        },
        ,
        {
          text: "10",
          value: 10
        },
        {
          text: "ALL",
          value: this.state.product.length
        }
      ]
    };
    console.log("status ", this.state.loggedIn);
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    let imgUrl = "./smarthospital.jpg";
    return (
      <div
        className="App"
        style={{
          root: {
            backgroundImage: "url(" + imgUrl + ")",
            backgroundSize: "cover",
            overflow: "hidden"
          }
        }}
      >
        {/*  {localStorage.getItem("title")} */}
        <header>
          {/*  <SearchForm getRecords={this.getAllRecords} /> */}
          <SearchForm getRecordsById={this.getRecordsById} />
        </header>
        <main className="container">
          <div className="container" style={{ marginTop: 20 }}>
            <div style={{ textAlign: "left", margin: "2px" }}>
              <PatientModal style={{ paddingTop: "20px" }} />
            </div>

            <div style={{ paddingTop: "20px" }}>
              <p style={{ paddingTop: "10px" }} />
              <BootstrapTable
                className="container"
                keyField="id"
                data={this.state.product}
                columns={this.state.columns}
                striped
                hover
                condensed
                headerClasses="header-class"
                noDataIndication={this.indication}
                pagination={paginationFactory(options)}
              />
            </div>
          </div>
        </main>
        <footer>
          <nav
            className="navbar navbar-primary bg-primary"
            style={{ height: 40 }}
          >
            <a className="navbar-brand text-white conatiner">footer</a>
          </nav>
        </footer>
      </div>
    );
  }
}

export default Hospital;

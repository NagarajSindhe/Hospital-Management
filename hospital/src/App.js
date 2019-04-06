import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Hospital from "./components/Hospital";
import LogOut from "./components/LogOut";
import Admin from "./components/Admin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/hospital" exact component={Hospital} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/logout" exact component={LogOut} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

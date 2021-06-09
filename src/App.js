import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import CreateProject from "./CreateProject/CreateProject";
import Profile from "./Profile/Profile";
import Dashboard2 from "./Dashboard2/FrontPage";
import Project from "./Project/Project";
import EditProject from "./EditProject/EditProject";
import Contribute from "./Contribute/Contribute";
import AboutUs from "./AboutUs/AboutUs";
import Documentation from "./Documentation/Documentation";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/dashboard2" component={Dashboard2}></Route>
          <Route exact path="/createproject" component={CreateProject}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route path="/project/:id" component={Project}></Route>
          <Route path="/editproject/:id" component={EditProject}></Route>
          <Route path="/contribute" component={Contribute}></Route>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/docs" component={Documentation}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

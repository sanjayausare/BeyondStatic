import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Main from './Main/Main'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/" component={Main}></Route>   
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;

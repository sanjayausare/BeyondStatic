import styles from "./Login.css";
import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getURL } from "../utils/index";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      open: false,
    };
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  setPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();

    const thatURL = getURL() + "/api/login";

    axios
      .post(
        thatURL,
        {
          username: this.state.username,
          password: this.state.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.status === "400 Bad Request") {
            this.setState({
              open: true,
              message: "Incorrect Username or Password!",
            });
            return 0;
          }
          // if (data.status === "401 Unauthorized") {
          //   this.setState({
          //     open: true,
          //     message: "Incorrect Username or Password!",
          //   });
          //   return 0;
          // }
          localStorage.setItem("username", data.username);
          localStorage.setItem("token", data.token);
          window.location = "/dashboard";
        }
      })
      .catch((err) => {
        this.setState({
          open: true,
          message: "Server Seems to be down. Please try later. We got this.",
        });
      });
  };

  signUpHandler = () => {
    window.location = "/signup";
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  // In dashboard file
  // state = {};
  // componentDidMount() {
  //   const config = {
  //     headers: {
  //       Authorization: 'Bearer ' + localStorage.getItem('token')
  //     }
  //   }
  //   axios.get('user',config).then(res => {
  //   this.setState({
  //     user:res.data
  //   })
  // },
  //   err => {
  //     console.log(err);
  //   }
  //   )
  // }

  // ------------------------------------------------------
  //In index.js
  // axios.defaults.baseURL = 'http://localhost:8000/';
  // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  // ----------------------------------------
  render() {
    return (
      <div style={{ backgroundColor: "#4171EE", height: "100%" }}>
        <div
          className="container container-fluid text-center"
          style={{ margin: "0 auto" }}
        >
          <div className="row" style={{ padding: "10% 3% 5% 0%", margin: "0" }}>
            <div className="col-lg-3 col-sm-12">
              <img src="./Logo.svg" alt="BS Logo" style={{ height: "164px" }} />
            </div>
            <div className="col-lg-9 col-sm-12">
              <div className="col-lg-12">
                <h1
                  className="header"
                  style={{
                    marginTop: "0",
                    color: "white",
                    textTransform: "uppercase",
                    fontSize: "3.2em",
                  }}
                >
                  Beyond Static
                </h1>
              </div>
              <div className="col-lg-12 col-sm-12">
                <p
                  style={{
                    marginBottom: "0",
                    color: "white",
                    fontSize: "1.8em",
                  }}
                >
                  Welcome Back to Beyond Static
                </p>
              </div>
              <div className="col-lg-12">
                <p
                  style={{ marginTop: "0", color: "white", fontSize: "1.4em" }}
                >
                  Login To Access Your Beyond Static Service
                </p>
              </div>
            </div>

            <div className="col-lg-12">
              <br />
              <br />
              <TextField
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "2em",
                  width: "70%",
                  padding: "1%",
                  paddingLeft: "3%",
                }}
                InputProps={{ disableUnderline: true }}
                placeholder="Username"
                margin="normal"
                required
                onChange={this.setUsername}
                value={this.state.username}
              />
            </div>
            <div className="col-lg-12">
              <TextField
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  borderRadius: "2em",
                  width: "70%",
                  marginBottom: "5%",
                  padding: "1%",
                  paddingLeft: "3%",
                }}
                InputProps={{ disableUnderline: true }}
                placeholder="Password"
                margin="normal"
                required
                type="password"
                onChange={this.setPassword}
                value={this.state.password}
              />
              <br />
              <span style={{ fontSize: "1.2rem", color: "#fff" }}>
                Not a member?{" "}
              </span>{" "}
              <span
                onClick={this.signUpHandler}
                style={{
                  fontSize: "1.23rem",
                  color: "#fff",
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginLeft: "0",
                }}
              >
                Sign Up
              </span>
            </div>

            <div className="col-lg-12">
              <br />
              <button
                onClick={(e) => {
                  this.login(e);
                }}
                type="submit"
                style={{
                  width: "auto",
                  padding: "1% 3%",
                  borderRadius: "28px",
                  fontSize: "1.3rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  border: "none",
                }}
              >
                Login &nbsp;&nbsp;
                <img
                  src="images/signUpArrow.svg"
                  alt="arrow"
                  className="loginArrow"
                />
              </button>
            </div>
            <div
              className="col-lg-12 col-sm-12"
              style={{ marginTop: "4%", marginBottom: "2%" }}
            >
              <div className="text-center container container-fluid">
                <img
                  src="./secure.svg"
                  className="img img-fluid"
                  alt="design"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </div>

            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {this.state.message}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Okay
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

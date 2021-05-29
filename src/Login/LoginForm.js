import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
      open: false
    };
  }

  setUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  setPassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  signIn = () => {
    if (this.state.username === "react" && this.state.password === "password") {
      this.setState({
        open: true,
        message: "You have successfully Logged In!"
      });
    } else {
      this.setState({
        open: true,
        message: "Incorrect Username or Password!"
      });
    }
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      
        <div className="col-lg-12 col-sm-12">
      <div className="col-lg-6 col-sm-12" style={{ backgroundColor: '#4171EE', height: '100%'}}>
          <div className="container container-fluid">
        <div className="container container-fluid text-center" style={{margin: '0 auto'}}>
            <div className="row" style={{padding: '10% 3% 5% 0%'}}>
              <div className="col-lg-4 col-sm-12">
                <img src="./Logo.svg" alt="BS Logo"  style={{height:'70%', marginLeft:'45%'}} />
            </div>
             <div className="col-lg-8 col-sm-12 " style={{textAlign:'justify'}}>
                 <div className="col-lg-12">
                        <h1 style={{marginTop: '0', color: 'white', textTransform:'uppercase', fontSize:'2.5em'}}>Beyond Static</h1>
                        </div>
                 <div className="col-lg-12">
                        <p style={{marginBottom: '0', color: 'white', fontSize:'1.3em'}}>Welcome Back to Beyond Static</p>
                        </div>
                        <div className="col-lg-12">
                        <p style={{marginTop: '0', color: 'white'}}>Login To Access Your Beyond Static Service</p>
                        </div>
               
            </div>
             <div className="col-lg-12">
                     <TextField
              style={{backgroundColor: '#fff', color: '#000',borderRadius:'2em',width:'70%'}}
               variant="outlined"
               placeholder="Username"
               margin="normal"
               required
               onChange={this.setUsername}
               value={this.state.username}
             />
                </div>
             <div className="col-lg-12">
             <TextField
             style={{backgroundColor: '#fff', color: '#000',borderRadius:'2em', width:'70%', marginBottom: '5%'}}
               variant="outlined"
               placeholder="Password"
               margin="normal"
               required
               type="password"
               onChange={this.setPassword}
               value={this.state.password}
             />
                </div>
                
             <div className="col-lg-12">
               <Button
               style={{backgroundColor: '#0046FF', color: '#fff',borderRadius:'2em'}}
                 variant="contained"
                 color="primary"
                 onClick={() => {
                   this.signIn();
                 }}
               >
                 Log In&nbsp;&nbsp;&nbsp;<img src="images/signUpArrow.svg" alt="arrow" className={styles.signUpArrow} />
               </Button>
              </div>
             <div className="col-lg-12 col-sm-12" style={{marginTop: '4%', marginBottom: '2%'}}>
                <div className="text-center container container-fluid"><img src="./secure.svg" className="img img-fluid" alt="design" style={{maxWidth: '100%'}}/></div>
            </div>
            </div>
      </div>
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
      
    );
  }
}

export default Login;
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
        <div style={{backgroundColor: '#4171EE', height: '100%'}}>
        <div className="container container-fluid text-center" style={{margin: '0 auto'}}>
            <div className="row" style={{padding: '10% 3% 5% 0%'}}>
              <div className="col-lg-3 col-sm-12">
                <img src="./Logo.svg" alt="BS Logo"  style={{height:'164px'}} />
            </div>
             <div className="col-lg-9 col-sm-12">
                 <div className="col-lg-12">
                        <h1 style={{marginTop: '0', color: 'white', textTransform:'uppercase', fontSize:'3.9em'}}>Beyond Static</h1>
                        </div>
                 <div className="col-lg-12 col-sm-12" >
                        <p style={{marginBottom: '0', color: 'white', fontSize:'2em'}}>Welcome Back to Beyond Static</p>
                        </div>
                        <div className="col-lg-12">
                        <p style={{marginTop: '0', color: 'white',fontSize:'1.4em'}}>Login To Access Your Beyond Static Service</p>
                        </div>
               
            </div>
             <div className="col-lg-12">
                     <TextField
              style={{backgroundColor: '#fff', color: '#000',borderRadius:'2em',width:'70%',padding:'1%',paddingLeft:'3%'}}
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
             style={{backgroundColor: '#fff', color: '#000',borderRadius:'2em', width:'70%', marginBottom: '5%',padding:'1%',paddingLeft:'3%'}}
               InputProps={{ disableUnderline: true }}
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
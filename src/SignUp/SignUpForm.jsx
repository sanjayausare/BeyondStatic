import styles from "./SignUpForm.module.css";
import SignUpInput from "./SignUpInput";
import React, {useState} from 'react'
import axios from 'axios'
import {getURL} from '../utils/index'
import AlertDialogSlide from './AlertDialogSlide'
let passwordValidator = require('password-validator');

const SignUpForm = () => {

    let schema = new passwordValidator();
    schema
    .is().min(6)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(1)
    .has().not().spaces()
    .has().symbols(1)


    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [agreedTC, setAgreedTC] = useState(false);
    const [alertCode, setAlertCode] = useState(0)

    const thatURL = getURL() + "/api/register"
    console.log(thatURL)

    const fNameHandler = (e) => {
        setFName(e.target.value);
    }

    const lNameHandler = (e) => {
        setLName(e.target.value);
    }

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const confPasswordHandler = (e) => {
        setConfPassword(e.target.value);
    }

    const agreedTCHandler = () => {
        if(agreedTC === true)
        {
            setAgreedTC(false)
        }
        else
        {
            setAgreedTC(true)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confPassword)
        {
            setAlertCode(1);
            return 0;
        }
        if(!schema.validate(password))
        {
            setAlertCode(2);
            return 0;
        }
        const body = {
            "username": username,
            "fname": fname,
            "lname": lname,
            "email": email,
            "password": password
        }
        axios.post(
            thatURL,
             body,
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          ).then(
            response => {
                if(response.status === 200){
                  const data = response.data;
                  if(data.status === "400 Bad Request")
                  {
                    setAlertCode(4);
                    return 0;
                  }
                  if(data.status === "403 User already exists")
                  {
                    setAlertCode(5);
                    return 0;
                  }
                  localStorage.setItem('username', data.username);
                  localStorage.setItem('token', data.token);
                  window.location = '/dashboard'
                }
            }
          )
          .catch(
            err => {
              setAlertCode(3);
              return 0;
            }
          );
    }



  return (
    <div className="col-lg-6 col-sm-12" style={{ backgroundColor: "#4171EE" }}>
      {alertCode===1 ? <AlertDialogSlide title="Are you high?" body="Password and Confirm Password do not match." /> : null}
      {alertCode===2 ? <AlertDialogSlide title="Secure Much?" body="Password should be of atleast length 6. It must have upper and lower case letters, atleast 1 number and 1 symbol." /> : null}
      {alertCode===3 ? <AlertDialogSlide title="Servers Down!" body="Server Seems to be down. Please try later. We got this." /> : null}
      {alertCode===4 ? <AlertDialogSlide title="Token Error" body="Account created but error in passing token. Kindly Login." /> : null}
      {alertCode===5 ? <AlertDialogSlide title="Get help for Alzheimers" body="Account already exists." /> : null}
      <div className="container container-fluid" style={{ margin: "5% 0" }}>
        <div className="container container-fluid text-center">
          <div className="row" style={{ margin: "0 auto" }}>
            <div className="col-lg-2 col-sm-12">
              <img
                src="./images/logoWhite.svg"
                alt="whiteLogo"
                style={{ height: "164px", marginBottom: "5%" }}
              />
            </div>
            <div className="col-lg-10 col-sm-12">
              <div className="row">
                <div className="col-lg-12">
                  <p
                    style={{
                      fontSize: "60px",
                      marginBottom: "0",
                      color: "white",
                    }}
                    className={styles.brandName}
                  >
                    BEYOND STATIC
                  </p>
                </div>
                <div className="col-lg-12">
                  <p
                    style={{ fontSize: "40px", marginTop: "0", color: "white" }}
                  >
                    GET READY FOR LAUNCH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid row" style={{textAlign: 'center', color: 'white', fontSize: '1.3rem', marginTop: '2%'}}>
            <div className="col-lg-12 col-sm-12">
                  <p>Already a user?&nbsp; <span style={{textDecoration: 'underline'}} onClick={()=> window.location = "/login"}>Login</span></p>
            </div>
        </div>
        <div className="container container-fluid" style={{margin: '0'}}>
            <form style={{margin: '5% 10%'}} onSubmit={submitHandler}>
              <div className="row">
                <div className="col-lg-6 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="text"
                    name="fname"
                    labelName="First Name"
                    handler={fNameHandler}
                  />
                </div>
                <div className="col-lg-6 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput type="text" name="lname" labelName="Last Name" handler={lNameHandler} />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="text"
                    name="username"
                    labelName="Username"
                    handler={usernameHandler}
                  />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput type="email" name="email" labelName="Email" handler={emailHandler}  />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="password"
                    name="password"
                    labelName="Password"
                    handler={passwordHandler}
                  />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="password"
                    name="confirmPassword"
                    labelName="Confirm Password"
                    handler={confPasswordHandler}
                  />
                </div>
                <div className="col-lg-12 col-sm-12 text-center">
                <div class="row checkbox-row">
                <div class="col-lg-12 col-sm-12" style={{marginTop: '5%'}}>
                    <div class="checkbox-inline">
                    <label class="checkbox-inline" style={{fontSize: '1.2rem', color: '#ffffff'}}>
                    <input class="form-check-input" type="checkbox" value="" onChange={agreedTCHandler} /> &nbsp;&nbsp;I agree to the Terms and Conditions</label>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="text-center col-lg-6 col-sm-12">
                    { agreedTC ? <button type="submit" style={{marginTop: '15%', width: '100%', paddingTop: '3%', paddingBottom: '3%', borderRadius: '28px', fontSize: '1.3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: 'none'}} >Sign Up &nbsp; <img src="images/signUpArrow.svg" alt="arrow" className={styles.signUpArrow} /></button> : null}
                </div>
                <div className="col-lg-3"></div>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default SignUpForm;


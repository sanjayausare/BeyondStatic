import React, {useState, useEffect} from "react";
import SignUpInput from "./SignUpInput";
import styles from './LeftPart.module.css'
import axios from 'axios'
import AlertDialogSlide from './AlertDialogSlide'
import {getToken, getURL, getUsername} from '../utils/index'

export default function RightPart() {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [alertCode, setAlertCode] = useState(0)

    const fnameHandler = (e) => {
        setFname(e.target.value)
    }

    const lnameHandler = (e) => {
        setLname(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const formHandler = (e) => {
        e.preventDefault();
        const body = {
            "first_name": fname,
            "last_name": lname,
            "email": email
        }
        console.log(body)

        axios.put(
            getURL()+"/api/profile/"+getUsername(),
             body,
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
              }
            }
          ).then(
            response => {
                if(response.status === 200){
                  const data = response.data;
                  if(data.status === "200 OK")
                  {
                    //successfully updated
                    setAlertCode(1);
                  }
                  else
                  {
                      //some error
                      setAlertCode(2);
                  }
                }
            }
          )
          .catch(
          );

    }

  return (
    <div
      className="col-lg-6 col-md-6 col-sm-12 container-fluid"
      style={{ margin: "0", padding: "0", backgroundColor: "#4171EE" }}
    >
        {alertCode===1 ? <AlertDialogSlide title="Profile Updated Successfully" body="Your profile details were successfully updated" /> : null}
      {alertCode===2 ? <AlertDialogSlide title="Some Error Occurred" body="There seems to be a problem. We got this. Please try later" /> : null}
      <div className="row container-fluid" style={{ marginTop: "8%" }}>
        <div
          className="col-lg-12 col-sm-12 text-center"
          style={{ margin: "0", padding: "0" }}
        >
          <img
            src="./images/girl.svg"
            alt="girl"
            className="img img-fluid"
            style={{ margin: "0" }}
          />
        </div>
        <div className="col-lg-12 col-sm-12 text-center">
          <h1 style={{ marginTop: "7%", color: "white", marginBottom: "3%" }}>
            KEEP YOUR INFORMATION UPDATED
          </h1>
        </div>
        <div className="col-lg-12 col-sm-12">
          <form onSubmit={formHandler}>
            <div className="row container-fluid">
              <div className="col-lg-6 col-sm-12" style={{marginTop: '3%'}}>
                <SignUpInput
                  type="text"
                  name="First Name"
                  labelName="First Name"
                  handler={fnameHandler}
                />
              </div>
              <div className="col-lg-6 col-sm-12" style={{marginTop: '3%'}}>
                <SignUpInput
                  type="text"
                  name="Last Name"
                  labelName="Last Name"
                  handler={lnameHandler}
                />
              </div>
              <div className="col-lg-12 col-sm-12" style={{marginTop: '3%'}}>
                <SignUpInput
                  type="email"
                  name="Email"
                  labelName="Email"
                  handler={emailHandler}
                />
              </div>
              <div className="col-lg-12 col-sm-12 text-center">
                <button type="submit" style={{border: 'white solid 1px', marginTop: '9%', marginBottom: '4%', width: 'auto', paddingLeft:'3%', paddingRight: '3%', paddingTop: '1%', paddingBottom: '1%', borderRadius: '28px', fontSize: '1.3rem', backgroundColor: '#0046FF', color: 'white', boxShadow: '0px 6px 10px #272D3B33'}} >Update Profile &nbsp; <img src="images/pencil.svg" alt="arrow" className={styles.signUpArrow} /></button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

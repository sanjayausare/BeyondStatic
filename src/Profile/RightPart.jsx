import React from "react";
import SignUpInput from "./SignUpInput";
import styles from './LeftPart.module.css'

export default function RightPart() {
  return (
    <div
      className="col-lg-6 col-md-6 col-sm-12 container-fluid"
      style={{ margin: "0", padding: "0", backgroundColor: "#4171EE" }}
    >
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
          <form>
            <div className="row container-fluid">
              <div className="col-lg-6 col-sm-12" style={{marginTop: '3%'}}>
                <SignUpInput
                  type="text"
                  name="First Name"
                  labelName="First Name"
                  //handler={usernameHandler}
                />
              </div>
              <div className="col-lg-6 col-sm-12" style={{marginTop: '3%'}}>
                <SignUpInput
                  type="text"
                  name="Last Name"
                  labelName="Last Name"
                  //handler={usernameHandler}
                />
              </div>
              <div className="col-lg-12 col-sm-12" style={{marginTop: '3%'}}>
                <SignUpInput
                  type="email"
                  name="Email"
                  labelName="Email"
                  //handler={usernameHandler}
                />
              </div>
              <div className="col-lg-12 col-sm-12 text-center">
                <button type="submit" style={{border: 'white solid 4px', marginTop: '9%', marginBottom: '4%', width: 'auto', paddingLeft:'3%', paddingRight: '3%', paddingTop: '1%', paddingBottom: '1%', borderRadius: '28px', fontSize: '1.3rem', backgroundColor: '#0046FF', color: 'white', border: 'none'}} >Update Profile &nbsp; <img src="images/pencil.svg" alt="arrow" className={styles.signUpArrow} /></button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

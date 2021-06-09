import React from "react";
import Button from '@material-ui/core/Button';
import styles from "./LogoStuff.module.css";
import Navbar from './Navbar'

export default function Contribute() {



  return (
    <div style={{ padding: "0", margin: "0", fontSize:'90%', fontFamily:'sans-serif' }}>
        <Navbar style={{padding:'0',margin:'0'}}/>
        <br /><br />
      <div style={{fontSize: '1.15rem', margin:'8% 3% 0 3%'}}>
        <p>
          We are a team of student-developers and are working on Beyond Static
          as a way to give back to the community. Beyond Static is completely
          Open Source and all of the code can be found on GitHub. If you want to
          help us by contributing to the code, have any ideas or encounter any
          bugs, do let us know.
        </p>
        <p>
          Besides regular updates, a major scheduled release we have planned is
          a Flutter Application currently in Production. If you feel you can
          help us, do reach out!
        </p>
        <p>We would love to have you on board!!</p>
      </div>
      <br />
      <div className="container-fluid"><h2 style={{ color: "#2D62ED", margin: "2%" }}>You may find the Deployment Links Here:</h2></div>
      <div className="row container-fluid">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="container-fluid text-center"
            style={{
              margin: "4%",
              border: "0px solid #000",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "20px",
            }}
          >
            <img
              src="./images/django.svg"
              alt="django"
              width="40%"
              className="img img-fluid"
              style={{ margin: "5% auto" }}
            />
            <br/>
            <h3>Django REST Framework</h3>
            <h5>Backend</h5>
            <br />
            <span>We use Django for the Backend with PostgreSQL for DB and JWT for authentication</span><br /><br />
            <a href="https://github.com/sanjayausare/BeyondStatic-Backend" target="_blank" style={{textDecoration: 'none'}}><Button variant="outlined" className={styles.fourbtns} size="small" style={{fontSize: '1.1rem', padding: 'auto', borderRadius: '50px', margin:'6% auto'}}><i class="fab fa-github fa-1x"></i>&nbsp;&nbsp;GitHub&nbsp;&nbsp;</Button></a>
            <br /><br />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div
            className="container-fluid text-center"
            style={{
              margin: "4%",
              border: "0px solid #000",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "20px",
            }}
          >
            <img
              src="./images/react.svg"
              alt="react"
              width="40%"
              className="img img-fluid"
              style={{ margin: "5% auto" }}
            />
            <br/>
            <h3>ReactJS</h3>
            <h5>Web Framework</h5>
            <br />
            <span>ReactJS is used for the Web-App using Axios, ChartJS and other libraries</span><br /><br />
            <a href="https://github.com/sanjayausare/BeyondStatic" target="_blank" style={{textDecoration: 'none'}}><Button variant="outlined" className={styles.fourbtns} size="small" style={{fontSize: '1.1rem', padding: 'auto', borderRadius: '50px', margin:'6% auto'}}><i class="fab fa-github fa-1x"></i>&nbsp;&nbsp;GitHub&nbsp;&nbsp;</Button></a>
            <br /><br />
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12" style={{marginBottom: '3%'}}>
          <div
            className="container-fluid text-center"
            style={{
              margin: "4%",
              border: "0px solid #000",
              boxShadow: "0px 3px 6px #00000029",
              borderRadius: "20px",
            }}
          >
            <img
              src="./images/flutter.svg"
              alt="flutter"
              width="40%"
              className="img img-fluid"
              style={{ margin: "5% auto" }}
            />
            <br/>
            <h3>Flutter</h3>
            <h5>App Framework</h5>
            <br />
            <span>Flutter App is powered by Core Dart functionalities assisted by Material UI</span><br /><br />
            <a href="https://github.com/alfhad/BeyondStaticApp" target="_blank" style={{textDecoration: 'none'}}><Button variant="outlined" className={styles.fourbtns} size="small" style={{fontSize: '1.1rem', padding: 'auto', borderRadius: '50px', margin:'6% auto'}}><i class="fab fa-github fa-1x"></i>&nbsp;&nbsp;GitHub&nbsp;&nbsp;</Button></a>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

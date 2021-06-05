import React from "react";
import refresh from "../assets/refresh.svg";
import edit from "../assets/edit.svg";
import deleteit from '../assets/delete.svg';
import pinkDot from '../assets/pinkDot.svg';
import greenDot from '../assets/greenDot.svg';
import {useState, useEffect} from 'react';
import AlertDialogSlide from './AlertDialogSlide'
import axios from 'axios'
import {getURL, getUsername, getToken} from '../utils/index'

export default function Mainbar(props) {

  const [errorCode, setErrorCode] = useState(0)
  const token = getToken();
  const username = getUsername();
  const url = getURL();
  

  const refreshHandler = () => {
    window.location = "/project/"+props.id
  }

  const editHandler = () => {
    window.location = "/editproject/"+props.id
  }

  const statusHandler = () => {

    const body = {
      'ProjectName': props.projectName,
      'EndpointURL': props.projectURL,
      'Field1Name': props.field1,
      'Field2Name': props.field2,
      'Field3Name': props.field3,
      'Field4Name': props.field4,
      'Field5Name': props.field5,
      'Description': props.projectDesc,
      'ProjectStatus': !props.projectStatus,
    }
    
    axios.put(
      url + "/api/project/"+props.id,
       body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getToken()
        }
      }
    ).then(
      response => {
        console.log(response)
          if(response.status === 200){
            window.location = "/project/"+props.id
          }
      }
    )
    .catch(
      setErrorCode(1)
    );
  }

  return (
    <div className="col-lg-12 col-md-12 col-sm-12" style={{ margin: "5% 0" }}>
      {errorCode===1 ? <AlertDialogSlide projID={props.id} title="Some Error Occurred" body="We'll fix this. Please try again later" /> : null}
      <br />
      <div
        className="row container-fluid"
        style={{
          backgroundColor: "#2D62ED",
          borderRadius: "20px",
          margin: "0",
          padding: "2% auto",
        }}
      >
        <div className="col-lg-9 col-md-9 col-sm-12">
          <h1 style={{ color: "#fff", padding: "auto 1%" }}>
            {props.projectName}
          </h1>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 text-center">
          <img
            src={refresh}
            onClick={refreshHandler}
            alt="refresh"
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          />
          <img
            src={edit}
            alt="edit"
            onClick={editHandler}
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          />
          <img
            src={deleteit}
            alt="delete"
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          />
          {props.projectStatus ? <img
            src={greenDot}
            alt="project active"
            onClick={statusHandler}
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          /> : <img
          src={pinkDot}
          alt="project inactive"
          onClick={statusHandler}
          className="img img-fluid"
          width="40%"
          style={{ margin: "5%", maxWidth: "30px" }}
        />}
        </div>
      </div>
    </div>
  );
}

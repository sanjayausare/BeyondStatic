import React from "react";
import refresh from "../assets/refresh.svg";
import edit from "../assets/edit.svg";
import deleteit from '../assets/delete.svg';
import pinkDot from '../assets/pinkDot.svg';
import greenDot from '../assets/greenDot.svg'

export default function Mainbar(props) {

  const refreshHandler = () => {
    window.location = "/project/"+props.id
  }

  return (
    <div className="col-lg-12 col-md-12 col-sm-12" style={{ margin: "5% 0" }}>
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
          <img
            src={greenDot}
            alt="delete"
            className="img img-fluid"
            width="40%"
            style={{ margin: "5%", maxWidth: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}

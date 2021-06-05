import React from "react";

export default function Metadata(props) {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="row">
          <div
            style={{
              backgroundColor: "#FF007C",
              borderRadius: "20px",
              margin: "3%",
              padding: "auto",
            }}
            className="col-lg-12 col-md-12 col-sm-12"
          >
            <br />
            <h1 style={{ margin: "auto 3%", color: "#fff" }}>Description</h1>
            <br />
            <h4 style={{ margin: "auto 3%", color: "#fff" }}>
              {props.projectDesc}
            </h4>
            <br />
          </div>
          <div
            style={{
              backgroundColor: "#2D62ED",
              borderRadius: "20px",
              margin: "0 3% 3% 3%",
              padding: "auto",
            }}
            className="col-lg-12 col-md-12 col-sm-12"
          >
            <br />
            <h1 style={{ margin: "auto 3%", color: "#fff" }}>Endpoint URL</h1>
            <br />
            <h4 style={{ margin: "auto 3%", color: "#fff" }}>
              {props.projectURL}
            </h4>
            <br />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div
          style={{
            backgroundColor: "#7D00B5",
            borderRadius: "20px",
            margin: "3%",
            padding: "auto",
          }}
        >
          <br />
          <h1 style={{ margin: "auto 3%", color: "#fff" }}>Fields</h1>
          <br />
          <h4 style={{ margin: "auto 3%", color: "#fff" }}>
            <ul>
              <li style={{ margin: "1% auto" }}>Field 1: {props.field1}</li>
              <li style={{ margin: "1% auto" }}>Field 2: {props.field2}</li>
              <li style={{ margin: "1% auto" }}>Field 3: {props.field3}</li>
              <li style={{ margin: "1% auto" }}>Field 4: {props.field4}</li>
              <li style={{ margin: "1% auto" }}>Field 5: {props.field5}</li>
            </ul>
          </h4>
          <br />
        </div>
      </div>
    </>
  );
}

import React from "react";
import Navbar from "./Navbar";
import Mainbar from "./Mainbar";
import Metadata from "./Metadata";
import Table from "./Table";
import axios from "axios";
import TheChart from "./TheChart";
import Info from "./Info";
import { useState, useEffect } from "react";
import { getToken, getUsername, getURL } from "../utils/index";

export default function Project({
  match: {
    params: { id },
  },
}) {
  const token = getToken();
  const username = getUsername();
  const url = getURL();

  const [projectData, setProjectData] = useState();
  const [projectName, setProjectName] = useState();
  const [projectDesc, setProjectDesc] = useState();
  const [projectURL, setProjectURL] = useState();
  const [projectStatus, setProjectStatus] = useState();
  const [field1, setField1] = useState();
  const [field2, setField2] = useState();
  const [field3, setField3] = useState();
  const [field4, setField4] = useState();
  const [field5, setField5] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: url + "/api/project/" + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })
      .then((response) => {
        const dat = response.data;
        setProjectData(dat);
        setProjectName(dat.ProjectName);
        setProjectDesc(dat.Description);
        setProjectStatus(dat.ProjectStatus);
        setProjectURL(dat.EndpointURL);
        setField1(dat.Field1Name);
        if(dat.Field2Name==="")
        {
          setField2("--");
        }
        else
        {
          setField2(dat.Field2Name);
        }
        if(dat.Field3Name==="")
        {
          setField3("--");
        }
        else
        {
          setField3(dat.Field3Name);
        }
        if(dat.Field4Name==="")
        {
          setField4("--");
        }
        else
        {
          setField4(dat.Field4Name);
        }
        if(dat.Field5Name==="")
        {
          setField5("--");
        }
        else
        {
          setField5(dat.Field5Name);
        }
      })
      .catch((err) => {
        alert("Something went wrong!");
      });
  }, []);

  return (
    <div style={{ padding: "0", margin: "0" }}>
      <Navbar style={{ padding: "0", margin: "0" }} />
      <br />
      <br />
      <div className="row container-fluid">
        <Mainbar
          id={id}
          projectName={projectName}
          projectStatus={projectStatus}
          projectData={projectData}
          projectDesc={projectDesc}
          projectURL={projectURL}
          field1={field1}
          field2={field2}
          field3={field3}
          field4={field4}
          field5={field5}
        />
      </div>
      <div className="row">
        <Metadata
          id={id}
          projectName={projectName}
          projectStatus={projectStatus}
          projectData={projectData}
          projectDesc={projectDesc}
          projectURL={projectURL}
          field1={field1}
          field2={field2}
          field3={field3}
          field4={field4}
          field5={field5}
        />
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <Table
            id={id}
            projectName={projectName}
            projectStatus={projectStatus}
            projectData={projectData}
            projectDesc={projectDesc}
            projectURL={projectURL}
            field1={field1}
            field2={field2}
            field3={field3}
            field4={field4}
            field5={field5}
          />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="row container-fluid">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <TheChart
                id={id}
                projectName={projectName}
                projectStatus={projectStatus}
                projectData={projectData}
                projectDesc={projectDesc}
                projectURL={projectURL}
                field1={field1}
                field2={field2}
                field3={field3}
                field4={field4}
                field5={field5}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Info
                id={id}
                projectName={projectName}
                projectStatus={projectStatus}
                projectData={projectData}
                projectDesc={projectDesc}
                projectURL={projectURL}
                field1={field1}
                field2={field2}
                field3={field3}
                field4={field4}
                field5={field5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

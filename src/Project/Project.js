import React from 'react'
import Navbar from './Navbar'
import Mainbar from './Mainbar'
import axios from "axios";
import {useState, useEffect} from 'react'
import { getToken, getUsername, getURL } from "../utils/index";

export default function Project({match:{params:{id}}}) {

    const token = getToken();
    const username = getUsername();
    const url = getURL();

    const [projectData, setProjectData] = useState()
    const [projectName, setProjectName] = useState()
    const [projectDesc, setProjectDesc] = useState()
    const [projectURL, setProjectURL] = useState()
    const [projectStatus, setProjectStatus] = useState()
    const [field1, setField1] = useState()
    const [field2, setField2] = useState()
    const [field3, setField3] = useState()
    const [field4, setField4] = useState()
    const [field5, setField5] = useState()


    useEffect(
        () => {
          axios({
            method: "GET",
            url:
              url + "/api/project/"+id,
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          })
            .then((response) => {
              const dat = response.data;
              setProjectData(dat)
              setProjectName(dat.ProjectName)
              setProjectDesc(dat.Description)
              setProjectStatus(dat.ProjectStatus)
              setProjectURL(dat.EndpointURL)
              setField1(dat.Field1Name)
              setField2(dat.Field2Name)
              setField3(dat.Field3Name)
              setField4(dat.Field4Name)
              setField5(dat.Field5Name)
            })
            .catch((err) => {
              alert("Something went wrong!");
            });
        }, []
      )

    return (
        <div style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br /><br />
            <div className="row">
            <Mainbar id={id} projectName={projectName} projectStatus={projectStatus} projectData={projectData} projectDesc={projectDesc} projectURL={projectURL} field1={field1} field2={field2} field3={field3} field4={field4} field5={field5} />
            </div>
        </div>
    )
}

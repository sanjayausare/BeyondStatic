import React, {useState} from 'react'
import Navbar from './Navbar'
import FormLeft from './FormLeft'
import FormRight from './FormRight'
import axios from 'axios'
import AlertDialogSlide from './AlertDialogSlide'

import {getURL, getUsername, getToken} from '../utils/index'

export default function CreateProject() {

    const [errorCode, setErrorCode] = useState(0)

    const [projName, setProjName] = useState("");
    const [projDesc, setProjDesc] = useState("");
    const [projURL, setProjURL] = useState("");

    const [field1, setField1] = useState("");
    const [field2, setField2] = useState("");
    const [field3, setField3] = useState("");
    const [field4, setField4] = useState("");
    const [field5, setField5] = useState("");

    const projNameHandler = (val) => {
        setProjName(val);
    }

    const projDescHandler = (val) => {
        setProjDesc(val);
    }

    const projURLHandler = (val) => {
        setProjURL(val);
    }

    const field1Handler = (val) => {
        setField1(val);
    }

    const field2Handler = (val) => {
        setField2(val);
    }

    const field3Handler = (val) => {
        setField3(val);
    }

    const field4Handler = (val) => {
        setField4(val);
    }

    const field5Handler = (val) => {
        setField5(val);
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const body = {
            "ProjectName": projName,
            "EndpointURL": projURL,
            "Description": projDesc,
            "Field1Name": field1,
            "Field2Name": field2,
            "Field3Name": field3,
            "Field4Name": field4,
            "Field5Name": field5
        }

        axios.post(
            getURL()+"/api/"+getUsername()+"/project",
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
                  const data = response.data;
                  try{
                      if(data.id > 0)
                      {
                          //setErrorCode(1);
                          window.location = "/dashboard"
                          return 0;
                      }
                  }
                catch{
                    setErrorCode(2);
                    return 0;
                  }
                }
            }
          )
          .catch(
          );
    }

    return (
        <div style={{padding:'0',margin:'0'}}>
            {errorCode===1 ? <AlertDialogSlide title="Project Added" body="Project has been added successfully" /> : null}
            {errorCode===2 ? <AlertDialogSlide title="Some Error Occurred" body="We'll fix this. Please try again later" /> : null}
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br />
            <form onSubmit={formSubmitHandler}>
            <div className="container-fluid row g-0" style={{margin:'0'}}>
                
                <FormLeft projNameHandler={projNameHandler} projDescHandler={projDescHandler} projURLHandler={projURLHandler} />
                <FormRight field1Handler={field1Handler} field2Handler={field2Handler} field3Handler={field3Handler} field4Handler={field4Handler} field5Handler={field5Handler} />
                
            </div>
            </form>
        </div>
    )
}

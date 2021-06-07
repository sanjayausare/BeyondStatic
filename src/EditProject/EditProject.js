import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import FormLeft from './FormLeft'
import FormRight from './FormRight'
import axios from 'axios'
import AlertDialogSlide from './AlertDialogSlide'

import {getURL, getUsername, getToken} from '../utils/index'

export default function EditProject({match:{params:{id}}}) {

    const [projDet, setProjDet] = useState("")

    const token = getToken();
    const username = getUsername();
    const url = getURL();


    const body2 = {
      "token": token
    }

    axios.post(
      getURL()+"/api/tokencheck",
       body2,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getToken()
        }
      }
    ).then(
      response => {
        if(!response.data.status)
        {
          window.location = "/login"
        }
      }
    )
    .catch(
      () => {
        window.location = "/login"
      }
    );


    const body = {
      "username": username
    }
  
    axios.post(
      getURL()+"/api/checkproject/"+id,
       body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': getToken()
        }
      }
    ).then(
      response => {
        if(!response.data.status)
        {
          window.location = "/dashboard"
        }
      }
    )
    .catch(
      () => {
        window.location = "/dashboard"
      }
    );
    

    useEffect(
        () => {
          axios({
            method: "GET",
            url:
              url + "/api/project/"+id+"/"+username,
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          })
            .then((response) => {
              const dat = response.data;
              setProjDet(dat)
            })
            .catch((err) => {
              alert("Something went wrong!");
            });
        }, []
      )

    const [errorCode, setErrorCode] = useState(0)

    const [projName, setProjName] = useState(projDet.ProjectName);
    const [projDesc, setProjDesc] = useState(projDet.Description);
    const [projURL, setProjURL] = useState(projDet.EndpointURL);

    const [field1, setField1] = useState(projDet.Field1Name);
    const [field2, setField2] = useState(projDet.Field2Name);
    const [field3, setField3] = useState(projDet.Field3Name);
    const [field4, setField4] = useState(projDet.Field4Name);
    const [field5, setField5] = useState(projDet.Field5Name);

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
            "Field5Name": field5,
            "ProjectStatus": projDet.ProjectStatus
        }

        axios.put(
            url + "/api/project/"+id+"/"+username,
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
                  try{
                    setErrorCode(1)
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
            {errorCode===1 ? <AlertDialogSlide projID={id} title="Project Updated" body="Project has been updated successfully" /> : null}
            {errorCode===2 ? <AlertDialogSlide projID={id} title="Some Error Occurred" body="We'll fix this. Please try again later" /> : null}
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br /><br />
            <form onSubmit={formSubmitHandler}>
            <div className="container-fluid row g-0" style={{margin:'0'}}>
                
                <FormLeft projDet={projDet} projNameHandler={projNameHandler} projDescHandler={projDescHandler} projURLHandler={projURLHandler} />
                <FormRight projDet={projDet} field1Handler={field1Handler} field2Handler={field2Handler} field3Handler={field3Handler} field4Handler={field4Handler} field5Handler={field5Handler} />
                
            </div>
            </form>
        </div>
    )
}

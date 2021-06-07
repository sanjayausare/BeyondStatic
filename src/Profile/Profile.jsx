import React, {useState} from 'react'
import Navbar from './Navbar'
import LeftPart from './LeftPart'
import RightPart from './RightPart'
import SignUpRightBanner from './SignUpRightBanner'
import axios from 'axios'
import {getToken, getUsername, getURL} from '../utils/index'

export default function Profile() {

    const [editEnable, setEditEnable] = useState(false)

    const enableHandler = () => {
        if(editEnable === true)
        {
            setEditEnable(false)
        }
        else
        {
            setEditEnable(true)
        }
    }

    const body2 = {
        "token": getToken()
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

    return (
        <div style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br /><br />
            <div className="container-fluid row g-0" style={{margin:'0'}}>
                <LeftPart  enableHandler={enableHandler} />

                {editEnable ? <RightPart /> :
                <SignUpRightBanner/>}
            </div>
        </div>
    )
}

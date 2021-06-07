import React, { Component } from "react";
import Navbar from './Navbar'
import NewProject from './NewProject'
import MyProjects from './MyProjects'
import Overview from './Overview/Overview'
import Footer from './Footer'
import axios from 'axios'
import {getToken, getUsername, getURL} from '../utils/index'


export default function Dashboard() {

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
    <div className="" style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br /><br /><br />
            <NewProject style={{padding:'0',margin:'0'}} />
            <MyProjects style={{padding:'0',margin:'0'}}/>
            <Overview style={{padding:'0',margin:'0'}}/>
            <Footer style={{padding:'0',margin:'0'}}/>
    </div>
  )
}
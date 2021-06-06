import axios from 'axios'
import {getToken, getUsername, getURL} from '../utils/index'
import React, { useState, useEffect } from "react";
import img24 from "../assets/img24.svg"

export default function Info(props) {

    const [val, setVal] = useState()

    const url = getURL();
    const username = getUsername();
    const token = getToken();

    useEffect(
        ()=>{
            axios({
                method: "GET",
                url:
                  url + "/api/projectlastdaymessagescount/" + username + "/" + props.id,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `${token}`,
                },
              }).then((response) => {
                  const dat = response.data;
                  setVal(dat.count)
                }).catch((err) => {
                  console.log(err)
                });
        }, []
    )

    return (
        <div style={{backgroundColor: '#7D00B5',margin: '3%', padding: '3% 6%', borderRadius: '20px', boxShadow: '0px 3px 6px #00000029'}}>
           <h1 style={{color: '#fff', margin: '5% auto'}}>
                <img src={img24} alt="24" className="img img-fluid" width="20%" style={{alignContent: 'right', alignItems: 'right', textAlign: 'right'}} />
                &nbsp;&nbsp;{val}
            </h1>
            <h2 style={{color: '#fff', margin: '5% auto'}}>
                Messages in the last 24 Hours
            </h2>
        </div>
    )
}

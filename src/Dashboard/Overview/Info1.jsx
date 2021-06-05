import axios from 'axios'
import {getToken, getUsername, getURL} from '../../utils/index'
import React, { useState, useEffect } from "react";


export default function Info1() {

    const [val, setVal] = useState()

    const url = getURL();
    const username = getUsername();
    const token = getToken();

    useEffect(
        ()=>{
            axios({
                method: "GET",
                url:
                  url + "/api/allmessagescount/" + username,
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `${token}`,
                },
              }).then((response) => {
                  const dat = response.data;
                  setVal(dat.totalMessageCount)
                }).catch((err) => {
                  console.log(err)
                });
        }, []
    )

    return (
        <div style={{backgroundColor: '#2D62ED',margin: 'auto', padding: '3% 6%', borderRadius: '20px'}} className="container-fluid">
            <h1 style={{color: '#fff', margin: '5% auto'}}>
            <img src="./images/all.svg" alt="24" className="img img-fluid" width="20%" style={{alignContent: 'right', alignItems: 'right', textAlign: 'right'}} />
                &nbsp;&nbsp;{val}
            </h1>
            <h2 style={{color: '#fff', margin: '5% auto'}}>
                All-Time Messages
            </h2>
        </div>
    )
}

import axios from 'axios'
import {getToken, getUsername, getURL} from '../../utils/index'
import React, { useState, useEffect } from "react";

export default function Info2() {

    const [val, setVal] = useState()

    const url = getURL();
    const username = getUsername();
    const token = getToken();

    useEffect(
        ()=>{
            axios({
                method: "GET",
                url:
                  url + "/api/lastdaymessagescount/" + username,
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
        <div style={{backgroundColor: '#7D00B5',margin: 'auto', padding: '3% 6%', borderRadius: '20px'}}>
           <h1 style={{color: '#fff', margin: '5% auto'}}>
                <img src="./images/24.svg" alt="24" className="img img-fluid" width="20%" style={{alignContent: 'right', alignItems: 'right', textAlign: 'right'}} />
                &nbsp;&nbsp;{val}
            </h1>
            <h2 style={{color: '#fff', margin: '5% auto'}}>
                Messages in the last 24 Hours
            </h2>
        </div>
    )
}

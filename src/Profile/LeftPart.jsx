import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {getToken, getUsername, getURL} from '../utils/index'
import styles from './LeftPart.module.css'

export default function LeftPart(props) {

    const url = getURL();
    const token = getToken();
    const username = getUsername();

    const [profileData, setProfileData] = useState({})

    useEffect(
        () => {
          axios({
            method: "GET",
            url:
              url + "/api/profile/" + username,
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          })
            .then((response) => {
              setProfileData(response.data)
            })
            .catch((err) => {
              alert("Somthing went wrong!");
            });
        }, []
      )

      const  enableHandler = () => {
          props.enableHandler()
      }

    return (
        <div className="col-lg-6 col-md-6 col-sm-12" style={{margin: '3% auto 0 auto', padding: '0'}}>
            <div className="row container-fluid">
                <div className="col-lg-12 col-sm-12">
                    <h1 style={{color: '#2D62ED', marginTop: '5%', marginBottom: '7%'}}>YOUR PROFILE</h1>
                </div>
                <div className="col-lg-12 col-sm-12">
                    <h2 style={{color: '#2D62ED', marginBottom: '2.5%'}}>Username</h2>
                    <h3 style={{color: '#707070', marginBottom: '4%'}}>{profileData.username}</h3>
                </div>
                <div className="col-lg-12 col-sm-12">
                    <h2 style={{color: '#2D62ED', marginBottom: '2.5%'}}>First Name</h2>
                    <h3 style={{color: '#707070', marginBottom: '4%'}}>{profileData.first_name}</h3>
                </div>
                <div className="col-lg-12 col-sm-12">
                    <h2 style={{color: '#2D62ED', marginBottom: '2.5%'}}>Last Name</h2>
                    <h3 style={{color: '#707070', marginBottom: '4%'}}>{profileData.last_name}</h3>
                </div>
                <div className="col-lg-12 col-sm-12">
                    <h2 style={{color: '#2D62ED', marginBottom: '2.5%'}}>Email</h2>
                    <h3 style={{color: '#707070', marginBottom: '4%'}}>{profileData.email}</h3>
                </div>
                <br />
                <div className="col-lg-12 col-sm-12">
                <button onClick={enableHandler} style={{marginTop: '8%', marginBottom: '4%', width: 'auto', paddingLeft:'3%', paddingRight: '3%', paddingTop: '1%', paddingBottom: '1%', borderRadius: '28px', fontSize: '1.3rem', backgroundColor: '#0046FF', color: 'white', border: 'none'}} >Edit Profile &nbsp; <img src="images/signUpArrow.svg" alt="arrow" className={styles.signUpArrow} /></button>
                </div>
            </div>
        </div>
    )
}

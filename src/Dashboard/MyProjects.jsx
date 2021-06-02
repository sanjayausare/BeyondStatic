import styles from './MyProjects.module.css'
import ProjectCard from './ProjectCard'
import axios from "axios";
import {useState, useEffect} from 'react'
import { getToken, getUsername, getURL } from "../utils/index";

const MyProjects = () => {

    const token = getToken();
    const username = getUsername();
    const url = getURL();
    let projects = []
    const [projList, setProjList] = useState('')

    useEffect(
      () => {
        axios({
          method: "GET",
          url:
            url + "/api/" + username + "/project",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        })
          .then((response) => {
            setProjList(response.data)
          })
          .catch((err) => {
            alert("Somthing went wrong!");
          });
      }, []
    )
    

        console.log(projList)

    return(
        <div style={{marginTop: '5%', marginLeft: '2%', marginRight: '2%', padding: '0', marginBottom: '3%'}} className="container container-fluid">
            <h2 className={styles.myProj} style={{margin: '0', padding: '0', display: 'inline-block'}}><strong>My Projects ({projList.length})</strong></h2>
            <div className="row container-fluid" style={{marginTop: '3%'}}>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Active"/></div>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Inactive"/></div>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Active"/></div>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Inactive"/></div>
            </div>
        </div>
    )
}

export default MyProjects;
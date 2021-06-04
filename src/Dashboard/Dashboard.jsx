import React, { Component } from "react";
import Navbar from './Navbar'
import NewProject from './NewProject'
import MyProjects from './MyProjects'
import Overview from './Overview/Overview'
import Footer from './Footer'
import axios from 'axios'

class Dashboard extends Component {
    state = {};
componentDidMount() {
  const config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }
  axios.get('user',config).then(res => {
  this.setState({
    user:res.data
  })
},
  err => {
    console.log(err);
  }
  )
};
    newProjHandler = () => {
        window.location="/createproject"
    }
    render(){
    return(
        <div className="" style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br /><br /><br />
            <NewProject style={{padding:'0',margin:'0'}} />
            <MyProjects style={{padding:'0',margin:'0'}}/>
            <Overview style={{padding:'0',margin:'0'}}/>
            <Footer style={{padding:'0',margin:'0'}}/>
        </div>
    )}
}

export default Dashboard
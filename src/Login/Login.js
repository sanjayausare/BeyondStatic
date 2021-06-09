import LoginRightBanner from './LoginRightBanner'
import LoginForm from './LoginForm'
import './Login.css';

import axios from 'axios'
import {getURL, getUsername, getToken} from '../utils/index'

const SignIn = () => {


  const body2 = {
    "token": getToken()
  }

  axios.post(
    getURL()+"/api/tokencheck",
     body2,
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  ).then(
    response => {
      if(response.data.status)
      {
        window.location = "/dashboard"
      }
    }
  )
  .catch(
    () => {
      window.location = "/login"
    }
  );

  return (
    
    <div className="container-fluid" style={{padding:'0',margin:'0'}}>
        <div className="row g-0">
          <div className="col-lg-6 col-sm-12">
        <LoginForm/>
        </div>
        <div className="col-lg-6 col-sm-12">
          <LoginRightBanner/>
        </div>
        </div>
      </div>

  );
};

export default SignIn;

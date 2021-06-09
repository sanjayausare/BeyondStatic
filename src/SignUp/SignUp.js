import SignUpRightBanner from './SignUpRightBanner'
import SignUpForm from './SignUpForm'

import axios from 'axios'
import {getURL, getUsername, getToken} from '../utils/index'

const SignUp = () => {

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
      window.location = "/signup"
    }
  );

  return (
    <div className="container-fluid row g-0" style={{margin:'0'}}>
        <SignUpForm/>
        <SignUpRightBanner/>
      </div>
  );
};

export default SignUp;

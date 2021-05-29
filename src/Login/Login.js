import LoginRightBanner from './LoginRightBanner'
import LoginForm from './LoginForm'
import './Login.css';

const SignIn = () => {
  return (
    
    <div  className=" cont col-lg-12 col-sm-12" style={{padding:'0',margin:'0'}}>
        <LoginForm/>
        <LoginRightBanner/>
      </div>

  );
};

export default SignIn;

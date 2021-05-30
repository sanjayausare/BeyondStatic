import LoginRightBanner from './LoginRightBanner'
import LoginForm from './LoginForm'
import './Login.css';

const SignIn = () => {
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

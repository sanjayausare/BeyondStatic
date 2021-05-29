import SignUpRightBanner from './SignUpRightBanner'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  return (
    <div className="container-fluid row" style={{margin:'0'}}>
        <SignUpForm/>
        <SignUpRightBanner/>
      </div>
  );
};

export default SignUp;

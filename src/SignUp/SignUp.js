import SignUpRightBanner from './SignUpRightBanner'
import SignUpForm from './SignUpForm'

const SignUp = () => {
  return (
    <div className="container-fluid row g-0" style={{margin:'0'}}>
        <SignUpForm/>
        <SignUpRightBanner/>
      </div>
  );
};

export default SignUp;

import styles from "./SignUpForm.module.css";
import SignUpInput from "./SignUpInput";

const SignUpForm = () => {
  return (
    <div className="col-lg-6 col-sm-12" style={{ backgroundColor: "#4171EE" }}>
      <div className="container container-fluid" style={{ margin: "5% 0" }}>
        <div className="container container-fluid text-center">
          <div className="row" style={{ margin: "0 auto" }}>
            <div className="col-lg-2 col-sm-12">
              <img
                src="./images/logoWhite.svg"
                alt="whiteLogo"
                style={{ height: "164px", marginBottom: "5%" }}
              />
            </div>
            <div className="col-lg-10 col-sm-12">
              <div className="row">
                <div className="col-lg-12">
                  <p
                    style={{
                      fontSize: "60px",
                      marginBottom: "0",
                      color: "white",
                    }}
                    className={styles.brandName}
                  >
                    BEYOND STATIC
                  </p>
                </div>
                <div className="col-lg-12">
                  <p
                    style={{ fontSize: "40px", marginTop: "0", color: "white" }}
                  >
                    GET READY FOR LAUNCH
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container container-fluid" style={{margin: '0 2px'}}>
            <form style={{margin: '8% 10%'}}>
              <div className="row">
                <div className="col-lg-6 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="text"
                    name="fname"
                    labelName="First Name"
                  />
                </div>
                <div className="col-lg-6 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput type="text" name="lname" labelName="Last Name" />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="text"
                    name="username"
                    labelName="Username"
                  />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput type="email" name="email" labelName="Email" />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="password"
                    name="password"
                    labelName="Password"
                  />
                </div>
                <div className="col-lg-12 col-sm-12" style={{marginBottom: '8px'}}>
                  <SignUpInput
                    type="password"
                    name="confirmPassword"
                    labelName="Confirm Password"
                  />
                </div>
                <div className="col-lg-12 col-sm-12 text-center">
                <div class="row checkbox-row">
                <div class="col-lg-12 col-sm-12" style={{marginTop: '5%'}}>
                    <div class="checkbox-inline">
                    <label class="checkbox-inline" style={{fontSize: '1.2rem', color: '#ffffff'}}>
                    <input class="form-check-input" type="checkbox" value=""/> &nbsp;&nbsp;I agree to the Terms and Conditions</label>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="text-center col-lg-6 col-sm-12">
                    <button type="submit" style={{marginTop: '15%', width: '100%', paddingTop: '3%', paddingBottom: '3%', borderRadius: '28px', fontSize: '1.3rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: 'none'}} >Sign Up &nbsp; <img src="images/signUpArrow.svg" alt="arrow" className={styles.signUpArrow} /></button>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </form>
          </div>
      </div>
    </div>
  );
};

export default SignUpForm;

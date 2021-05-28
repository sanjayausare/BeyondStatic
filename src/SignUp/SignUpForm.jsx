import styles from './SignUpForm.module.css'

const SignUpForm = () => {
    return(
    <div className="col-lg-6 col-sm-12" style={{backgroundColor: '#4171EE'}}>
        <div className="container container-fluid" style={{margin: '5% 0'}}>
            <div className="container container-fluid text-center">
                <div className="row" style={{margin: '0 auto'}}>
                    <div className="col-lg-2 col-sm-12">
                        <img src="./images/logoWhite.svg" alt="whiteLogo" style={{height: '164px', marginBottom: '5%'}} />
                    </div>
                    <div className="col-lg-10 col-sm-12">
                    <div className="row">
                        <div className="col-lg-12">
                        <p style={{fontSize: '60px', marginBottom: '0', color: 'white'}} className={styles.brandName}>BEYOND STATIC</p>
                        </div>
                        <div className="col-lg-12">
                        <p style={{fontSize: '40px', marginTop: '0', color: 'white'}}>GET READY FOR LAUNCH</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
}

export default SignUpForm;
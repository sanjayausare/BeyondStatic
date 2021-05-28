import React from "react";
import styles from "./LogoStuff.module.css";
import Button from '@material-ui/core/Button';

const imgClasses = `img img-fluid ${styles['vert-move']}`

const LogoStuff = () => {
  return (
    <div className="text-center container container-fluid">
        <div className={styles.stuff}>
      <div class="row align-items-start">
        <div class="col-lg-2 col-sm-12"><img src="./images/logo.svg" className={imgClasses}  alt="logo" width="140px" height="140px" style={{marginBottom: '13px'}} /></div>
        <div class="col-lg-10 col-sm-12" >
          <div class="row align-items-start">
          <div class="col-lg-12" className={styles.brandName} style={{lineHeight: '5rem'}}>Beyond Static</div>
            <div class="col-lg-12"><span className={styles.tagline}>Your Best bet to add forms to your Static Pages</span></div>
            <div class="col-lg-12" style={{marginTop: '40px'}}>
                <div className="row align-items-start">
                <div className="col-lg-3 col-md-6 col-sm-12 fourbtns"><div><Button variant="outlined" className={styles.fourbtns} size="large" color="secondary" style={{fontSize: '1.1rem', padding: 'auto 5%', borderRadius:'50px', marginBottom:'4%'}}><i class="fas fa-play-circle"></i>&nbsp;&nbsp;Why BS?</Button></div></div>
                <div className="col-lg-3 col-md-6 col-sm-12 fourbtns"><div><Button variant="outlined" className={styles.fourbtns} size="large" style={{fontSize: '1.1rem', padding: 'auto 5%', borderRadius:'50px', marginBottom:'4%'}} className={styles.documentation}><i class="far fa-file"></i>&nbsp;&nbsp;Docs</Button></div></div>
                <div className="col-lg-3 col-md-6 col-sm-12 fourbtns"><div><Button variant="outlined" className={styles.fourbtns} size="large" color="primary" style={{fontSize: '1.1rem', padding: 'auto 5%', borderRadius:'50px', marginBottom:'4%'}}>Launch&nbsp;&nbsp;<i class="fas fa-arrow-alt-circle-right"></i></Button></div></div>
                <div className="col-lg-3 col-md-6 col-sm-12 fourbtns"><div><Button variant="outlined" className={styles.fourbtns} size="large" style={{fontSize: '1.1rem', padding: 'auto 5%', borderRadius: '50px', marginBottom:'4%'}}><i class="fab fa-github fa-1x"></i>&nbsp;&nbsp;GitHub</Button></div></div>
                </div>
            </div>
          </div>
        </div>
      </div></div>
    </div>
  );
};
export default LogoStuff;
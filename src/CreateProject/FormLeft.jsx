import React from 'react'
import styles from './FormLeft.module.css';

export default function FormLeft() {
    return (
        <div className="col-lg-6 col-sm-12">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2"></div><div className="col-lg-8 col-md-8 col-sm-8" style={{backgroundColor: '#2D62ED', borderRadius: '20px', margin: '4% auto', padding: '4%'}}>
                    <h3 className={styles.label}>Project Name</h3>
                    <h6 style={{color: 'white'}}>Enter Your Project Name Here</h6>
                    <input type="text"  style={{width: '100%', borderRadius: '20px', padding: 'auto 10%'}} placeholder="Enter Your Project Name Here" className={styles.input} required />
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2"></div>
            </div>
        </div>
    )
}

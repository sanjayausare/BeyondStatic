import React from 'react'
import styles from './FormLeft.module.css';

export default function FormLeft(props) {

    const projNameHand = (e) => {
        props.projNameHandler(e.target.value)
    }

    const projDescHand = (e) => {
        props.projDescHandler(e.target.value)
    }

    const projURLHand = (e) => {
        props.projURLHandler(e.target.value)
    }

    return (
        <div className="col-lg-6 col-sm-12" style={{margin: '0'}}>
            <br />
            <div className="container container-fluid">
                <div className="col-lg-1 col-md-1 col-sm-1"></div><div className="col-lg-10 col-md-10 col-sm-10" style={{backgroundColor: '#2D62ED', borderRadius: '20px', margin: '2% auto', padding: '4%'}}>
                    <h3 className={styles.label}>Project Name</h3>
                    <h6 style={{color: 'white'}}>Enter Your Project Name Here</h6>
                    <input onChange={projNameHand} type="text"  style={{width: '100%', borderRadius: '20px', padding: 'auto 10%'}} placeholder="Enter Your Project Name Here" className={styles.input} required />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
            </div>
            <div className="container container-fluid">
                <div className="col-lg-1 col-md-1 col-sm-1"></div><div className="col-lg-10 col-md-10 col-sm-10" style={{backgroundColor: '#FF007C', borderRadius: '20px', margin: '2% auto', padding: '4%'}}>
                    <h3 className={styles.label}>Description</h3>
                    <h6 style={{color: 'white'}}>Write A Description for your project</h6>
                    <textarea onChange={projDescHand} rows="5" cols="5" type="text"  style={{width: '100%', borderRadius: '20px', padding: 'auto 10%'}} placeholder="Brief your project in short. You can of course, edit this later." className={styles.input} required />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
            </div>
            <div className="container container-fluid">
                <div className="col-lg-1 col-md-1 col-sm-1"></div><div className="col-lg-10 col-md-10 col-sm-10" style={{backgroundColor: '#2D62ED', borderRadius: '20px', margin: '2% auto', padding: '4%'}}>
                    <h3 className={styles.label}>Project Endpoint URL</h3>
                    <h6 style={{color: 'white'}}>URL of your Static Web Endpoint</h6>
                    <input onChange={projURLHand} type="text"  style={{width: '100%', borderRadius: '20px', padding: 'auto 10%'}} placeholder="Enter Your Project Endpoint URL Here" className={styles.input} required />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
            </div>
            <br />
        </div>
    )
}

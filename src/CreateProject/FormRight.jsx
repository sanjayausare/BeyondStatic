import React, {useState, useEffect} from 'react'
import styles from './FormRight.module.css'
import AlertDialogSlide from './AlertDialogSlide'

export default function FormRight() {

    const [counter, setCounter] = useState(1);

    const [showField2, setShowField2] = useState(false);
    const [showField3, setShowField3] = useState(false);
    const [showField4, setShowField4] = useState(false);
    const [showField5, setShowField5] = useState(false);
    const [errorCode, setErrorCode] = useState(0);

    

    const addCountHandler = () => {
        setCounter(prevCount => prevCount +1);
        changedCounter();
    }

    const minusCountHandler = () => {
        setCounter(prevCount => prevCount -1);
        changedCounter();
    }

    const changedCounter = () => {
        if(counter <= 0)
        {
            setErrorCode(1)
            setCounter(1)
        }
        if(counter === 1)
        {
            setShowField2(false)
            setShowField3(false)
            setShowField4(false)
            setShowField5(false)
        }
        if(counter === 2)
        {
            setShowField2(true)
            setShowField3(false)
            setShowField4(false)
            setShowField5(false)
        }
        if(counter === 3)
        {
            setShowField2(true)
            setShowField3(true)
            setShowField4(false)
            setShowField5(false)
        }
        if(counter === 4)
        {
            setShowField2(true)
            setShowField3(true)
            setShowField4(true)
            setShowField5(false)
        }
        if(counter === 5)
        {
            setShowField2(true)
            setShowField3(true)
            setShowField4(true)
            setShowField5(true)
        }
        if(counter >= 6)
        {
            setErrorCode(2);
            setCounter(5);
        }
    }

    return (
        <div className="col-lg-6 col-sm-12" style={{ height: "100%", margin: '0' }}>
            {errorCode===1 ? <AlertDialogSlide title="Why Tho?" body="What would be the use of creating a Project with Zero Fields?" /> : null}
            {errorCode===2 ? <AlertDialogSlide title="Reached the Limit Fam" body="We currently allow only 5 Fields." /> : null}
            <br />
            <div className="row container-fluid" style={{background: 'white', boxShadow: '0 3px 6px #00000029', borderRadius: '20px', padding: '5%'}}>
                <div className="col-lg-8 col-md-8 col-sm-8" style={{color: '#2D62ED'}}>
                    <h3>Add Fields</h3>
                    <h6>Add required fields to the project.</h6>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4" style={{alignItems: 'right', textAlign: 'right'}}>
                    <img src="./images/plus.svg" alt="plus" onClick={addCountHandler} />&nbsp;&nbsp;&nbsp;
                    <img src="./images/minus.svg" alt="minus" width="37px" onClick={minusCountHandler}  />
                </div>
                <br />
                <div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 1 Name</h5>
                    <input type="text" className={styles.input} required/>
                </div>
                {
                    showField2 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 2 Name</h5>
                    <input type="text" className={styles.input}/>
                </div>) : null
                }
                {
                    showField3 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 3 Name</h5>
                    <input type="text" className={styles.input}/>
                </div>) : null
                }
                {
                    showField4 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 4 Name</h5>
                    <input type="text" className={styles.input}/>
                </div>) : null
                }
                {
                    showField5 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 5 Name</h5>
                    <input type="text" className={styles.input}/>
                </div>) : null
                }
                <div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto', alignItems: 'center', textAlign: 'center'}}>
                    <input type="submit" value="Create Project" style={{width: '80%', height: '150%', borderRadius: '20px', borderColor: '#6C63FF', backgroundColor: '#2D62ED', color: 'white', fontSize: '1.2rem', boxShadow: '1px 4px 8px #00000029'}} />
                </div>
            </div>
            <br />
        </div>
    )
}

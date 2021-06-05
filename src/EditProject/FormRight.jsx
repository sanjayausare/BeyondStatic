import React, {useState, useEffect} from 'react'
import styles from './FormRight.module.css'
import AlertDialogSlide from './AlertDialogSlide'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'

export default function FormRight(props) {

    const [counter, setCounter] = useState(1);

    const [showField2, setShowField2] = useState(false);
    const [showField3, setShowField3] = useState(false);
    const [showField4, setShowField4] = useState(false);
    const [showField5, setShowField5] = useState(false);
    const [errorCode, setErrorCode] = useState(0);

    const addCountHandler = () => {
        setCounter(prev => prev+1);
        changedCounter();
    }

    const minusCountHandler = () => {
        setCounter(prev => prev-1);
        changedCounter();
    }

    useEffect(
        () => {
            changedCounter()
        }, [counter]
    )

    const changedCounter = () => {
        setCounter(prev => prev)
        if(counter <= 0)
        {
            setErrorCode(1)
            setCounter(1)
        }
        if(counter === 1)
        {
            setShowField2(false)
            props.field2Handler("")
            setShowField3(false)
            props.field3Handler("")
            setShowField4(false)
            props.field4Handler("")
            setShowField5(false)
            props.field5Handler("")
        }
        if(counter === 2)
        {
            setShowField2(true)
            setShowField3(false)
            props.field3Handler("")
            setShowField4(false)
            props.field4Handler("")
            setShowField5(false)
            props.field5Handler("")
        }
        if(counter === 3)
        {
            setShowField2(true)
            setShowField3(true)
            setShowField4(false)
            props.field4Handler("")
            setShowField5(false)
            props.field5Handler("")
        }
        if(counter === 4)
        {
            setShowField2(true)
            setShowField3(true)
            setShowField4(true)
            setShowField5(false)
            props.field5Handler("")
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

    const field1Hand = (e) => {
        props.field1Handler(e.target.value)
    }

    const field2Hand = (e) => {
        props.field2Handler(e.target.value)
    }

    const field3Hand = (e) => {
        props.field3Handler(e.target.value)
    }

    const field4Hand = (e) => {
        props.field4Handler(e.target.value)
    }

    const field5Hand = (e) => {
        props.field5Handler(e.target.value)
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
                    <img src={plus} alt="plus" onClick={addCountHandler} />&nbsp;&nbsp;&nbsp;
                    <img src={minus} alt="minus" width="37px"  onClick={minusCountHandler}  />
                </div>
                <br />
                <div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 1 Name</h5>
                    <input placeholder={props.projDet.Field1Name} type="text" className={styles.input} onChange={field1Hand} required/>
                </div>
                {
                    showField2 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 2 Name</h5>
                    <input placeholder={props.projDet.Field2Name} type="text" className={styles.input} onChange={field2Hand}/>
                </div>) : null
                }
                {
                    showField3 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 3 Name</h5>
                    <input placeholder={props.projDet.Field3Name} type="text" className={styles.input} onChange={field3Hand}/>
                </div>) : null
                }
                {
                    showField4 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 4 Name</h5>
                    <input placeholder={props.projDet.Field4Name} type="text" className={styles.input} onChange={field4Hand}/>
                </div>) : null
                }
                {
                    showField5 ? (<div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto'}}>
                    <h5 style={{color: '#2D62ED'}}>Field 5 Name</h5>
                    <input placeholder={props.projDet.Field5Name} type="text" className={styles.input} onChange={field5Hand}/>
                </div>) : null
                }
                <div className="col-lg-12 col-md-12 col-sm-12" style={{margin: '5% auto', alignItems: 'center', textAlign: 'center'}}>
                    <input type="submit" value="Update Project" style={{width: '80%', height: '150%', borderRadius: '20px', borderColor: '#6C63FF', backgroundColor: '#2D62ED', color: 'white', fontSize: '1.2rem', boxShadow: '1px 4px 8px #00000029'}} />
                </div>
            </div>
            <br />
        </div>
    )
}

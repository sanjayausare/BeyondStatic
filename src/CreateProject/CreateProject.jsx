import React from 'react'
import Navbar from './Navbar'
import FormLeft from './FormLeft'
import FormRight from './FormRight'
import AlertDialogSlide from './AlertDialogSlide'

export default function CreateProject() {

    const formSubmitHandler = () => {

    }

    return (
        <div style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br />
            <form onSubmit={formSubmitHandler}>
            <div className="container-fluid row g-0" style={{margin:'0'}}>
                
                <FormLeft/>
                <FormRight/>
                
            </div>
            </form>
        </div>
    )
}

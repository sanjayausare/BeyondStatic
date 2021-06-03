import React from 'react'
import Navbar from './Navbar'
import FormLeft from './FormLeft'
import FormRight from './FormRight'

export default function CreateProject() {

    const formSubmitHandler = () => {

    }

    return (
        <div className="" style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <div className="container-fluid row g-0" style={{margin:'0'}}>
                <form onSubmit={formSubmitHandler}>
                <FormLeft/>
                <FormRight style={{margin: '0'}} />
                </form>
            </div>
        </div>
    )
}

import React from 'react'
import Table from './Table'
import './FrontPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function FrontPage() {

    return (
        <div className="page container-fluid">
            <div className="title">
                <h1>Project 1</h1>
            </div>
            <div className="project-container row" >
            <div className="tableBox col-lg-7 col-sm-12">
                <h2>New Data</h2>
                <div className="tools">
                    
                </div>
                <div className="table">
                    <Table/>
                </div>
            </div>
            <div className="project-details col-lg-4 col-sm-12">
                <div className="graph">
                    <p>graph</p>
                    <div className="footer">
                        <p>X New Entries</p>
                    </div>
                    <img src="images/signUpArrow.svg" alt="arrow" className="signUpArrow" />

                </div>
                <div className="activities">
                    <h1>41.7K</h1>
                    <p>Monthly<br />Downloads</p>
                     <img src="images/signUpArrow.svg" alt="arrow" className="signUpArrow" />
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex rem recusandae eius quasi. Eos eius at nulla tempore vel voluptate enim molestias, obcaecati natus ex, voluptas doloribus saepe. Facere.</p>
                     <div className="footer">
                        <p>Description</p>
                    </div>
                    <img src="images/signUpArrow.svg" alt="arrow" className="signUpArrow" />
                </div>
            </div>
            </div>
        </div>
    ); 
}

export default FrontPage
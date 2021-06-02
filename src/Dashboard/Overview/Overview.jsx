import styles from './Overview.module.css'
import Chart from './Chart'
import Info1 from './Info1'
import Info2 from './Info2'

const Overview = () => {
    return(
        <div style={{marginTop: '5%', marginLeft: '2%', marginRight: '2%', padding: '0', marginBottom: '3%'}} className="container container-fluid">
            <h2 className={styles.myProj} style={{margin: '0', padding: '0', display: 'inline-block'}}><strong>Overview:</strong></h2>
            <div className="row container-fluid" style={{marginTop: '3%'}}>
                <div className="col-lg-8 col-md-8 col-sm-12"><Chart/></div>
                <div className="col-lg-2 col-md-2 col-sm-12"><Info1/></div>
                <div className="col-lg-2 col-md-2 col-sm-12"><Info2/></div>
            </div>
        </div>
    )
}

export default Overview
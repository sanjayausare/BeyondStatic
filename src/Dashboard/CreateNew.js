
import styles from './CreateNew.module.css'

const CreateNew = () => {

    const cardClasses = "col-lg-3 col-sm-12" + styles.card
    return(
        <div className={cardClasses} style={{marginTop: '5%', marginLeft: '4%'}}>
            <h3 style={{color:'#2D62ED'}}>Create A New Project</h3>
            <h4 style={{color:'#2D62ED'}}>Let the Journey Begin</h4>
            <div className="" style={{marginTop: '4%'}}>
                <div className="col-lg-9 col-sm-9 col-xs-9"></div>
                <div className="col-lg-3 col-sm-3">
                <img className="img img-fluid" src="./images/plus.svg" alt="plus" />
                </div>
            </div>
        </div>
    )

}

export default CreateNew; 
import styles from './MyProjects.module.css'
import ProjectCard from './ProjectCard'

const MyProjects = () => {

    

    return(
        <div style={{marginTop: '5%', marginLeft: '2%', marginRight: '2%', padding: '0', marginBottom: '3%'}} className="container container-fluid">
            <h2 className={styles.myProj}><strong>My Projects (4)</strong></h2>
            <div className="row container-fluid" style={{marginTop: '3%'}}>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Active"/></div>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Inactive"/></div>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Active"/></div>
                <div className="col-lg-4 col-md-4 col-sm-12"><ProjectCard status="Inactive"/></div>
            </div>
        </div>
    )
}

export default MyProjects;
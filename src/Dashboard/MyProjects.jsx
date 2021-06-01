import styles from './MyProjects.module.css'
import ProjectCard from './ProjectCard'

const MyProjects = () => {
    return(
        <div style={{marginTop: '4%', marginLeft: '2%', marginRight: '0', padding: '0'}} className="container container-fluid">
            <h2 className={styles.myProj}><strong>My Projects (3)</strong></h2>
            <div className="row container-fluid" style={{marginTop: '3%'}}>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default MyProjects;
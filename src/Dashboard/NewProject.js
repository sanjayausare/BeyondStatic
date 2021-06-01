import CreateNew from './CreateNew'
import styles from './NewProject.module.css'

const NewProject = () => {

    return(
        <div className="row">
            <br/>
            <div className={styles.card}>
            <CreateNew/>
            </div>
        </div>
    )
}

export default NewProject;
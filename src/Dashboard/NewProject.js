import CreateNew from './CreateNew'
import styles from './NewProject.module.css'

const NewProject = () => {

    return(
        <div className="row"  style={{margin: '0', padding: '0'}}>
            <br/>
            <div>
            <CreateNew/>
            </div>
        </div>
    )
}

export default NewProject;
import Navbar from './Navbar'
import NewProject from './NewProject'
import MyProjects from './MyProjects'
import Overview from './Overview/Overview'
import Footer from './Footer'

const Dashboard = () => {

    const newProjHandler = () => {
        window.location="/createproject"
    }

    return(
        <div className="" style={{padding:'0',margin:'0'}}>
            <Navbar style={{padding:'0',margin:'0'}}/>
            <br /><br /><br />
            <NewProject style={{padding:'0',margin:'0'}} />
            <MyProjects style={{padding:'0',margin:'0'}}/>
            <Overview style={{padding:'0',margin:'0'}}/>
            <Footer style={{padding:'0',margin:'0'}}/>
        </div>
    )
}

export default Dashboard
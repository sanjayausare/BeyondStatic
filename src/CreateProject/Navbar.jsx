import styles from './Navbar.module.css'
import Sidbar from '../Sidebar/Sidebar'

const Navbar = () => {

    return(
    <div className="row" style={{boxShadow: '0px 3px 6px #272D3B33', margin: '0', padding: '0'}}>
        <Sidbar prefix="Cre" suffix="ate" />
    </div>)
}

export default Navbar;
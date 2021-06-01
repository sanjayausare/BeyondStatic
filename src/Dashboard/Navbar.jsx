import styles from './Navbar.module.css'

const Navbar = () => {

    return(
    <div className="row" style={{boxShadow: '0px 3px 6px #272D3B33', margin: '0', padding: '0'}}>
        <strong className={styles.nav}><p style={{marginLeft: '4%', marginTop: '1%', marginBottom: '1%', fontSize: '1.8rem'}}><span style={{borderTopColor: "#2D62ED", borderTop: '10px solid #2D62ED', borderRadius: '10px'}}>Pro</span>jects</p></strong>
    </div>)
}

export default Navbar;
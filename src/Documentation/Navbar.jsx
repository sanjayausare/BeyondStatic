import Sidbar from '../Sidebar/Sidebar'

const Navbar = () => {

    return(
    <div className="row container-fluid" style={{boxShadow: '0px 3px 6px #272D3B33', margin: '0', padding: '0'}}>
       {/* <Sidbar/> <strong className={styles.nav}><p style={{marginLeft: '4%', marginTop: '1%', marginBottom: '1%', fontSize: '1.8rem'}}><span style={{borderTopColor: "#2D62ED", borderTop: '10px solid #2D62ED', borderRadius: '10px'}}>Pro</span>jects</p></strong> */}
       <Sidbar prefix="Do" suffix="cs" />
        </div>)
}

export default Navbar;
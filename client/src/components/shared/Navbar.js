import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AuthConsumer} from '../../providers/AuthProvider';
import {} from '../../styles/NavbarStyles';
import '../../styles/Navbar.css'

import Logo from '../../images/logo.png';


const Navbar = (props) => {


  const navAuth = () => {
    const {user, handleLogout} = props.auth;
    if (user) {
      return (
      // <div>Hello {user.firstName}!
      <div className="rightNav">
        <Link to='/'>Home</Link>
        <Link to='/rooms'>Rooms</Link>
        <Link to='/profile'>Profile</Link>
        {/* <Link to='/'>Log Out</Link> */}
        <Link onClick={ () => handleLogout(props.history)} to='/'>Log Out</Link>
      </div>
      // </div>
      )
    } else {
      return (
        <div className="righNav">
        <Link to='/login'>Log In</Link>
        <Link to='/register'>Register</Link>
        </div>
      )
    } 
  }
 
// useEffect(() =>{

// },[])

  return (
    <div className="navContainer">
        <div className='leftWrap'>
          <img src={Logo} alt='logo' />
        </div>
      {navAuth()}
    </div>
  )
}

export const ConnectedNavbar = (props) => {
  return (
    <AuthConsumer>{(auth) => <Navbar {...props} auth={auth} />}</AuthConsumer>
  );
};
export default withRouter(ConnectedNavbar);


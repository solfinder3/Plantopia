import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AuthConsumer} from '../../providers/AuthProvider';
import {} from '../../styles/NavbarStyles';
import '../../styles/Navbar.css'


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
        <button onClick={ () => handleLogout(props.history)}>Log Out</button>
      </div>
      
      // </div>
      )
    } else {
      return (
        <div className="righNav">No user

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


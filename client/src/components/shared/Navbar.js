import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {AuthConsumer} from '../../providers/AuthProvider';

const Navbar = (props) => {


  const navAuth = () => {
    const {user, handleLogout} = props.auth;
    if (user) {
      return (
      <div>Hello {user.email}!
      
      <div>
        <Link to='/'>Home</Link>
        <Link to='/rooms'>Rooms</Link>
        <Link to='/plants'>Plants</Link>
        {/* <Link to='/'>Log Out</Link> */}
        <button onClick={ () => handleLogout(props.history)}>Log Out</button>
      </div>
      
      </div>
      )
    } else {
      return (
        <div>No user

        <Link to='/login'>Log In</Link>
        <Link to='/register'>Register</Link>
        </div>
      )
    } 
  }
 
// useEffect(() =>{

// },[])

  return (
    <div>Navbar
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


import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

import './Header.css'
const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <nav className='header'>
          
            <div>
                
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                {/* <Link to="/inventory">Inventory</Link>
                <Link to="/about">Abouts</Link> */}
                {user?.uid ?
                     <button className='btn-logout' onClick={logOut}>Log Out</button>
                    :
                    <>
                     <Link to="/login">Login</Link>
                     <Link to="/singup">SignUp</Link>
                    </>
            }
               
            </div>
        </nav>
    );
};

export default Header;
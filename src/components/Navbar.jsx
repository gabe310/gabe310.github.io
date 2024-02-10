import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/components/Navbar.css'

const Navbar = () => {
    return(
        <div className='Navbar'>
            <div className='NavbarTitle'>
                <h1>Gabriel Hernandez's Website</h1>
            </div>
                <div className='NavbarSection'>
                    <NavLink to='/'>About me</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <NavLink to='/resume'>Resume</NavLink>
                </div>
        </div>
        
    );
}

export default Navbar;
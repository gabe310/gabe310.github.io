import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/components/Navbar.css'
import resumeFile from '../assets/resume/GabrielHernandez_Resume_copy.pdf';

const Navbar = () => {

    const openPDF = () => {
        window.open(resumeFile, '_blank');
    };

    return(
        <div className='Navbar'>
            <div className='NavbarTitle'>
                <h1>Gabriel Hernandez's Website</h1>
            </div>
                <div className='NavbarSection'>
                    <NavLink to='/'>About me</NavLink>
                    <NavLink to='/projects'>Projects</NavLink>
                    <a onClick={openPDF}>Resume</a>
                </div>
        </div>
        
    );
}

export default Navbar;
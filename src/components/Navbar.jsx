import React, { useEffect } from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/components/Navbar.css'
import resumeFile from '../assets/resume/Gabe_Resume.pdf';

import ReactGA from "react-ga4";

const Navbar = () => {

    const openPDF = () => {
        window.open(resumeFile, '_blank');

        ReactGA.event({
            category: 'User Interaction',
            action: 'Open PDF',
            label: 'Resume'
        });
    };
 
    const scrollToTop = () => { //to make it scroll to top after clicking a link
        window.scrollTo({
          top: 0,
          behavior: 'smooth' //smooth scrolling animation
        });
    };


    return(
        <div className='Navbar'>
            <div className='NavbarTitle'>
                <h1>Gabriel Hernandez's Website</h1>
            </div>
                <div className='NavbarSection'>
                    <NavLink to='/' onClick={scrollToTop}>About me</NavLink>
                    <NavLink to='/projects' onClick={scrollToTop}>Projects</NavLink>
                    <a onClick={openPDF}>Resume</a>
                </div>
        </div>
        
    );
}

export default Navbar;
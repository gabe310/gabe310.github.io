import {React, useEffect, useState} from 'react';
import '../styles/projects/Projects.css';
import '../styles/projects/PanelOne.css';
import '../styles/projects/PanelTwo.css';

const Projects = () => {
    return (
        <div className='Projects'>
            <PanelOne/>
            <PanelTwo/>
        </div>
    );
}

const PanelOne = () => {

    return(
        <div className='PanelOne'>
            <div className='ProjectsContainer'>
                <div className='Title'>
                    Projects
                </div>
            </div>
            <div className='PanelOneDivider'/>
        </div>
    );
}

const PanelTwo = () => {
    return (
        <div className='PanelTwo'>
            <div className='ProjectBox'>
                <div className='Subtext'>
                    <b>project title here</b>
                </div>
                <div className='Subtext'>
                    <ul>
                        <li>Simulated real life work environment, tasked to debug and implement functionalities for CEO and stakeholders.</li>
                        <li>Created accessible tools such as text to speech, speech to text, and dictation functionalities, aiding those with impairments.</li>
                        <li>Developed website using JavaScript, html, CSS, NodeJS, ExpressJS, MySQL, and google cloud APIs.</li>
                    </ul>
                </div>
            </div>



        </div>
    );
}


export default Projects;
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
                    <b>Checkers | Software Engineer</b> <br /> Sept - Dec 2023
                </div>
                <div className='Subtext'>
                    <ul>
                        <li>Built spellchecker desktop app increasing proficiency in literary writing to users, detecting spelling errors for up to 95%.</li>
                        <li>Developed application software in Java and JavaFX using OOP for creating functionalities and controllers, prioritizing the
ease of maintenance and understanding of the program.</li>
                        <li>Designed using Figma to Enhance UX/UI to better understand frontend layouts saving time and costs.</li>
                        <li>Used Junit testing framework assisting in integrations by reducing errors and ensuring quality and reliability of the software.</li>
                        <li>Collaborated using confluence for documentation and Bitbucket code hosting repository. Managed software with Kanban in
Jira, leading team to increase productivity and organization.</li>
                    </ul>
                </div>
            </div>

            <div className='ProjectBox'>
                <div className='Subtext'>
                    <b>PubTalk | Full Stack Developer</b> <br /> Sept 2023 - Present
                </div>
                <div className='Subtext'>
                    <ul>
                        <li>Developed MERN stack-based article platform used for university students to publish articles and essays, aimed to help
students gain an audience by sharing their collection of work.</li>
                        <li>Implemented database with mongoDB to store all articles in an organized manner. Integrated a RESTful API in JavaScript to
link the frontend to each article, enabling a fast display of articles to prioritize user experience.</li>
                        <li>Designed UX/UI with react for reusable routing components, easing navigation management of large-scale webpages.</li>
                        <li>Integrated NodeJS and express for fast development with middleware and routing functions, allowing quick article requests.</li>
                        <li>Utilized Postman for API testing, saving time and cost by ensuring high-quality error testing to minimize bugs.</li>
                    </ul>
                </div>
            </div>

            <div className='ProjectBox'>
                <div className='Subtext'>
                    <b>Alarm Robot | Embedded Systems Engineer</b> <br /> Aug 2023 - Present
                </div>
                <div className='Subtext'>
                    <ul>
                        <li>Building innovative self-moving alarm clock robot with collision detection. Users set alarm via phone to wake up.</li>
                        <li>In development for frontend and backend of the mobile app using react and Flask.</li>
                        <li>designing with premade robot kit, integrated with Raspberry Pi 4 in python, using pyTorch to set an AI model for collision.</li>
                    </ul>
                </div>
            </div>
            



        </div>
    );
}


export default Projects;
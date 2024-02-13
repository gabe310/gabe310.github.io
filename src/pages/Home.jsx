import {React, useEffect, useState} from 'react';
import '../styles/home/Home.css'
import '../styles/home/PanelOne.css'
import Gabe from '../assets/home/Gabe.png'
import '../styles/home/PanelTwo.css'
import quotesData from '../db/dataquote.json'
import '../styles/home/PanelThree.css'

const Home = () => {
    return (
        <div className='Home'>
            <PanelOne/>
            <PanelTwo/>
            <PanelThree/>

        </div>
    );
}

const PanelOne = () => { 
    return(
        <div className='PanelOne'>
            <div className='PanelOneContainer'>
                <div className='PanelOneTextContainer'>
                    <div className='Title' id='PanelOneTitle'>
                        HELLO WORLD!
                    </div>
                    <div className='Subtext' id='PanelOneSubtext'>
                        My name is Gabriel and I am a 3rd year computer science student in the pursuit of continuous learning. 
                        I have been adopting and embracing the student mindset of seeking knowledge and growth. 
                        I am experienced in Java, C, Python, and Javascript, and look forward to mastering them as well as gaining new skills along the way. 
                        I'm always striving for creativity and logical thinking in everyday life.
                    </div>
                </div>
                <div className='PanelOneImageContainer'>
                    <img src={Gabe} alt='' className='PanelOneImage'/>
                </div>
            </div>
            <div className='PanelOneDivider'/>
        </div>
    );
}

const PanelTwo = () => {
    //const [quotes, setQuotes] = useState([]); this is for the api request, but github cant use it
    const [quotes, setQuotes] = useState(quotesData);
    const [current, setCurrent] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
   
    // I dont have API key nor CORS policy header for access to deploy
    // useEffect(() => {
    //     const fetchQuotes = async () => {
    //         try {
    //             const response = await fetch('/api/quotes');
    //             const data = await response.json();
    //             console.log(data[0].q);
    //             setQuotes(data);
    //         }
    //         catch (error) {
    //             console.error('error fetching quotes:', error);
    //         }
    //     };

    //     fetchQuotes();
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setCurrent((prevIndex) => (prevIndex + 1) % quotes.length);
                setFadeIn(true);
            }, 500); //fade out animation
        }, 5000); //changes the quote with duration every 5 seconds

        return () => clearInterval(interval);
    }, [quotes]);
   
    return(
        <div className='PanelTwo'>
            {quotes.length > 0 && (
                    <div className={`quote-container ${fadeIn ? 'fade-in' : ''}`}>
                        <div className='quote'>{quotes[current].q}</div>
                        <div className='author'>- {quotes[current].a}</div>
                    </div>
            )}
        </div>
    );
}

const PanelThree = () => {
    
    return(
        <div className='PanelThree'>
            <div className='Title' id='PanelThreeTitle'>
                Education and Hackathons:
            </div>
            <div className='Subtext' id='PanelThreeSubtext'>
                <b>University of Western Ontario</b> - Expected to graduate May 2025
            </div>
            <div className='Subtext' id='PanelThreeText'>
                <b>Relevant courses:</b>
                <ul>
                    <li><a href='https://www.csd.uwo.ca/misc/outlines/2021/2021-CS2210-B.pdf' target="_blank">Data Structures and Algorithms</a></li>
                    <li><a href='https://www.csd.uwo.ca/misc/outlines/2022-Winter/CS_2208B_Winter2022.pdf' target="_blank">Computer Organization and Architecture</a></li>
                    <li><a href='https://www.csd.uwo.ca/misc/outlines/2023-Winter/CS2212-b.pdf' target="_blank">Introduction to Software Engineering</a></li>
                    <li><a href='https://www.csd.uwo.ca/misc/outlines/2020/2020-CS3357-A.pdf' target="_blank">Networks</a></li>
                    <li><a href='https://www.csd.uwo.ca/misc/outlines/2021/2021-CS3305-A.pdf' target="_blank">Operating Systems</a></li>
                    <li><a href='https://www.csd.uwo.ca/misc/outlines/2023-Winter/CS3377-b.pdf' target="_blank">Project Management</a></li>
                </ul>
            </div>

            <div className='Subtext' id='PanelThreeSubtext'>
                <b><a href='https://devpost.com/software/snapcycle-hyx3qv' target="_blank">McMaster MacHacks 3 - Best AI environmental Hack</a></b> <br /> Feb 2023
            </div>
            <div className='Subtext' id='PanelThreeText'>
                <ul>
                    <li>Developed web app SnapCycle allows users to scan various objects and learn how to properly dispose them.</li>
                    <li>Integrated machine learning detection model using Pytorch that receives the user inputs.</li>
                    <li>Designed website in React to implement a camera that uses Flask API sending data to the AI model and receive back
                    information on the detected object.</li>
                </ul>
            </div>

            <div className='Subtext' id='PanelThreeSubtext'>
                <b><a href='https://devpost.com/software/inklink-qs6b1v' target="_blank">WDS Overhaul Hackathon - 2nd Place Winners</a></b> <br />Dec 2023
            </div>
            <div className='Subtext' id='PanelThreeText'>
                <ul>
                    <li>Simulated real life work environment, tasked to debug and implement functionalities for CEO and stakeholders.</li>
                    <li>Created accessible tools such as text to speech, speech to text, and dictation functionalities, aiding those with impairments.</li>
                    <li>Developed website using JavaScript, html, CSS, NodeJS, ExpressJS, MySQL, and google cloud APIs.</li>
                </ul>
            </div>


            <div className='PanelThreeImageContainer'>
            </div>

        </div>
    );
}


export default Home;
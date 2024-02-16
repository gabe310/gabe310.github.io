import {React, useEffect, useState} from 'react';
import '../styles/home/Home.css'
import '../styles/home/PanelOne.css'
import Gabe from '../assets/home/Gabe.png'
import '../styles/home/PanelTwo.css'
import quotesData from '../db/dataquote.json'
import '../styles/home/PanelThree.css'
import western from '../assets/home/western-image.jpeg'
import '../styles/home/PanelFour.css'

const Home = () => {
    return (
        <div className='Home'>
            <PanelOne/>
            <PanelTwo/>
            <PanelThree/>
            <PanelFour/>

        </div>
    );
}

const PanelOne = () => { 

    useEffect(() => {
        // JavaScript function for the console-style animation
        function consoleText(words, id, colors) {
            // Paste the consoleText function here
            if (colors === undefined) colors = ['#fff'];
            var visible = true;
            var con = document.getElementById('console');
            var letterCount = 1;
            var x = 1;
            var waiting = false;
            var target = document.getElementById(id);
            target.setAttribute('style', 'color:' + colors[0])

            window.setInterval(function() {
                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount)
                    window.setTimeout(function() {
                        var usedColor = colors.shift();
                        colors.push(usedColor);
                        var usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        target.setAttribute('style', 'color:' + colors[0])
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } 
                else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    window.setTimeout(function() {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } 
            
                else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount)
                    letterCount += x;
                }
            }, 120);
            
            window.setInterval(function() {
                if (visible === true) {
                    con.className = 'console-underscore hidden'
                    visible = false;
                } 
                else {
                    con.className = 'console-underscore'
                    visible = true;
                }
            }, 400);
        }

        // Initiate the animation
        consoleText(['HELLO WORLD!'], 'text', ['tomato', 'rebeccapurple', 'lightblue', 'lightgreen']);
    }, []);


    return(
        <div className='PanelOne'>
            <div className='PanelOneContainer'>
                <div className='PanelOneTextContainer'>
                    <div className='Title' id='PanelOneTitle'>
                        <div className='console-container'>
                            <span id='text'></span>
                            <div className='console-underscore' id='console'>&#95;</div>
                        </div>
             
                    </div>
                    <div className='Subtext' id='PanelOneSubtext'>
                        My name is Gabriel and I am a 3rd year computer science student in the pursuit of continuous learning. 
                        I have been adopting and embracing the student mindset of seeking knowledge and growth. 
                        I am experienced in Java, C, Python, and Javascript. I look forward to mastering them as well as gaining new skills along the way. 
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

    const handleClick = (url) => {
        // Handle click action for the given URL
        window.open(url, '_blank'); // Redirect to the desired link
    };
    
    return(
        <div className='PanelThree'>
            <div className='EducationContainer'>
                <div className='EducationSection'>
                    <div className='Title'>
                        Education and Hackathons:
                    </div>
                    <div className='Subtext'>
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
                </div>

                <div className='PanelThreeImageContainer'>
                    <img src={western} alt='' className='PanelThreeImage'/>
                </div>
            </div>
            
            

            <div className='PanelThreeContainer'>
                <div className='SubtextBox' onClick={() => handleClick('https://devpost.com/software/snapcycle-hyx3qv')}>
                    <div className='Subtext'>
                        <b><a href='https://devpost.com/software/snapcycle-hyx3qv' target="_blank">McMaster MacHacks 3 - Best AI environmental Hack</a></b> <br /> Feb 2023
                    </div>
                    <div className='Subtext'>
                        <ul>
                            <li>Developed web app SnapCycle allows users to scan various objects and learn how to properly dispose them.</li>
                            <li>Integrated machine learning detection model using Pytorch that receives the user inputs.</li>
                            <li>Designed website in React to implement a camera that uses Flask API sending data to the AI model and receive back
                            information on the detected object.</li>
                        </ul>
                    </div>

                </div>
                
                <div className='SubtextBox' onClick={() => handleClick('https://devpost.com/software/inklink-qs6b1v')}>
                    <div className='Subtext'>
                        <b><a href='https://devpost.com/software/inklink-qs6b1v' target="_blank">WDS Overhaul Hackathon - 2nd Place Winners</a></b> <br />Dec 2023
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
        </div>
    );
}

const PanelFour = () => {
    return(
        <div className='PanelFour'>
            <div className='Skills'>
                <div className='Title'>
                    Skills:
                </div>
            </div>
            <div className='PanelFourContainer'>
                <div className='Box'>Java</div>
                <div className='Box'>Python</div>
                <div className='Box'>C</div>
                <div className='Box'>C++</div>
                <div className='Box'>JavaScript</div>
                <div className='Box'>HTML</div>
                <div className='Box'>CSS</div>
                <div className='Box'>NodeJS</div>
                <div className='Box'>ExpressJS</div>
                <div className='Box'>MongoDB</div>
                <div className='Box'>React</div>
                <div className='Box'>MySQL</div>
                <div className='Box'>Git</div>

            </div>
        </div>
    );
}


export default Home;
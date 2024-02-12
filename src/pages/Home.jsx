import {React, useEffect, useState} from 'react';
import '../styles/home/Home.css'
import '../styles/home/PanelOne.css'
import Gabe from '../assets/home/Gabe.png'
import '../styles/home/PanelTwo.css'
import quotesData from '../db/dataquote.json'

const Home = () => {
    return (
        <div className='Home'>
            <PanelOne/>
            <PanelTwo/>

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
    //i add another divisor???
}


export default Home;
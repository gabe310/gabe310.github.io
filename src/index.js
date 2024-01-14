import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//ok so to deploy this react app onto github pages, i need to do npm install gh-pages --save-dev stuff
//do all the stuff so this folder is connected to the github repo. 
//then i gotta do the package.json stuff, i can leave the homepage link to how it is so its like the main personal website kinda thing
//i could also leave it like "homepage": "https://gabe310.github.io/(some repo name in github)" for another project to deploy
//then i do the predeploy and deploy stuff, and type npm run build (if i want to, its ususally for safe common work place), 
//then i do npm run deploy to deploy the site onto github pages. 
//i think that buid folder if i were to make a frontend and backend folder, i leave the build outside of the front and backend folders
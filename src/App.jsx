import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Project from './pages/Projects';
import ReactGA from "react-ga4";


//import './App.css';

const MEASUREMENT_ID = process.env.REACT_APP_MEASUREMENT_ID; 

ReactGA.initialize(MEASUREMENT_ID);

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Project/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
//to deploy app you do npm run deploy
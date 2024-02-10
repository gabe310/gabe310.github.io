import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
//to deploy app you do npm run deploy
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import TypingEffect from './components/TypingEffect';
import Typing from './components/Typing';
import About from './components/About';
import '@splinetool/viewer';

function Home() {
  return (
    <div className="Hero-section">
      <div className='Background'>
        <spline-viewer 
          url="https://prod.spline.design/nyLw2wfM0taAmpSP/scene.splinecode"
          style={{ width: '100%', height: '87vh', display: 'block' }}
        ></spline-viewer>
      </div>
      <div className='Content'>
        <TypingEffect />
        <div className="Paragraph">
          <p className='para-content'>
            We’re a software-driven organization passionate about building smart, reliable, 
            and scalable digital solutions for the future.
          </p>
        </div>
        <div className="Btn-container">
          <Link to="/about" className="Btn-Learn">Learn More</Link>
          <button className='Btn-join'>Join now !!</button>
        </div>
      </div>
      <div className='Type-test'>
        <Typing />
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    import('@splinetool/viewer');
  }, []);

  return (
    <Router>
      <div className="Navbar-container">
        <nav className='Navbar'>
          <h1 className='Logo'>StarX</h1>
          <ul className="Nav-links">
            <li className="Links"><Link to="/">Home</Link></li>
            <li className="Links"><Link to="/about">About</Link></li>
            <li className="Links"><a href="">Join!</a></li>
          </ul>
          <button className="Log">Login</button>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;

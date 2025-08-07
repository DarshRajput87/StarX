import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TypingEffect from './components/TypingEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="Navbar-container">
        <nav className='Navbar'>
          <h1 className='Logo'>StarX</h1>
          <ul className="Nav-links">
            <li className="Links"><a href="">Home</a></li>
            <li className="Links"><a href="">About</a></li>
            <li className="Links"><a href="">Join!</a></li>
          </ul>
          <button className="Log">Login</button>
        </nav>
      </div>
      <div className="Hero-section">
 <div className='Background'>
      <spline-viewer url="https://prod.spline.design/wIAWOxnAClBEKfBZ/scene.splinecode"></spline-viewer> 
    
    </div>
    <div className='Content'>
    <TypingEffect/>
    <div className="Paragraph">
      <p className='para-content'>We’re a software-driven organization passionate about building smart, reliable, and scalable digital solutions for the future.</p>
    </div>
    <div className="Btn-container">
      <button className="Btn-Learn">Learn More</button>
      <button className='Btn-join'>Join now !!</button>
    </div>
    </div>
    
      </div>
      
    </>
  )
}

export default App

// <script type="module" src="https://unpkg.com/@splinetool/viewer@1.10.42/build/spline-viewer.js"></script>
{/* */}
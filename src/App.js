import './App.css';
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import FunLinks from './components/FunLinks/FunLinks.js';

import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // ✅ Use useRef instead of createRef
  const navRef = useRef(null);
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const funLinksRef = useRef(null);

  const refs = {
    navRef,
    introRef,
    aboutRef,
    funLinksRef
  };

  // ✅ Prevent default and scroll with longer duration
  const scrollToComponent = (e, ref) => {
    console.log('scrolling');
    e.preventDefault();
    if (ref && ref.current) {
      console.log(ref.current);
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default Page */}
          <Route 
            path="/" 
            element={
              <header className="App-header">
                <div ref={navRef}>
                  <Nav scrollToComponent={scrollToComponent} refs={refs}/>
                </div>
                <div ref={introRef}><Intro /></div>
                <div ref={aboutRef}><About /></div>
                <div ref={funLinksRef}><FunLinks /></div>
                <footer className="App-footer" style={{color: 'white', fontSize: '15px'}}>
                  made by nathan dilla
                </footer>
              </header>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
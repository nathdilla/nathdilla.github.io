import './App.css';
import Nav from './components/Nav/Nav';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Experience from './components/Experience/Experience';

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ChristmasCard from "./sites/ChristmasCard/ChristmasCard.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default Page */}
          <Route 
            path="/" 
            element={
              <header className="App-header">
                <Nav />
                <Intro />
                <About />
                <Experience />
              </header>
            } 
          />
          {/* Christmas Card page */}
          <Route path="/ChristmasCard" element={<ChristmasCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
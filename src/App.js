// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AnimatedImage from './components/AnimatedImage';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        {/* Define routes for the main content */}
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AnimatedImage />
              <Introduction />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/project/:name" element={<ProjectDetail />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AnimatedImage from './components/AnimatedImage';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AnimatedImage />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

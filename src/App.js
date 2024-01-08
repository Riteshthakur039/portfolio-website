import React from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Exp from './components/Exp';
import Contact from './components/Contact';

function App() {
  return (
  <>
    <NavBar />
    <Home />

    <SocialLinks />
    <About />
    <Portfolio />
    <Exp />
    <Contact />

   
  </>
  );
}

export default App;

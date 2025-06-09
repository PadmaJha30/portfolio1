import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from "./components/Skills";
import Project from './components/Project';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    Aos.init();
  })
  return (
  <>
    <Navbar />
    <div class="container">
     <Home/>
     <Experience/>
     <Skills/>
     <Project/>
     <Contact/>
    </div>

  </>
 
  );
}

export default App;

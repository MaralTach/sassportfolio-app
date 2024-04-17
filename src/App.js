import './App.scss';
import React from 'react';
import NotFound from './components/Error/NotFound';
import Navbar from './components/Navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Footer from './components/Footer/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
 

function App() {
  return (
    <div className="home-bgImg-container">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
     </Routes>
     <Footer/>

     </BrowserRouter>
   
     
    </div>
  );
}

export default App;

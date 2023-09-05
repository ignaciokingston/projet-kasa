import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';


const root = createRoot(document.getElementById('root'));

root.render (
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/fichelogements/:id" element= {<FicheLogement/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/*" element= {<NotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)


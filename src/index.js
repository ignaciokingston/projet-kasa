import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import FicheLogement from './pages/FicheLogement'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.render (
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
  document.getElementById ('root')
)


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
import Header from './Components/Header/Header';
import Error from './Pages/Error/Error'
import Contact from './Pages/Contact/Contact';
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);


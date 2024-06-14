import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './assets/pages/About';
import Home from './assets/pages/Home';
import Dashboard from './assets/pages/Dashboard';
import Projects from './assets/pages/Projects';
import SignUp from './assets/pages/SignUp';
import SignIn from './assets/pages/SignIn';
import Header from './components/Header';
import FooterComp from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navigation/navbar';
import { Footer } from './components/navigation/footer';
import { HomePage } from './pages/homepage';
import { About } from './pages/about';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AngebotePage } from './pages/AngebotePage';
import { SortimentPage } from './pages/SortimentPage';
import { ServicePage } from './pages/ServicePage';
import { UeberUnsPage } from './pages/UeberUnsPage';
import { KontaktPage } from './pages/KontaktPage';
import { MarktfinderPage } from './pages/MarktfinderPage';
export function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFBF5]">
      {/* Global floating bubble background */}
      <div className="bubble-bg" aria-hidden="true">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
      </div>

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marktfinder" element={<MarktfinderPage />} />
        <Route path="/angebote" element={<AngebotePage />} />
        <Route path="/sortiment" element={<SortimentPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/ueber-uns" element={<UeberUnsPage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
      <Footer />
    </div>);

}
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MarktfinderPage } from './pages/MarktfinderPage';
import { AngebotePage } from './pages/AngebotePage';
import { SortimentPage } from './pages/SortimentPage';
import { ServicePage } from './pages/ServicePage';
import { UeberUnsPage } from './pages/UeberUnsPage';
import { KontaktPage } from './pages/KontaktPage';
import { FloatingContactBar } from './components/ContactIconButtons';
export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-orange-50/30 font-sans text-slate-800">
        <Navbar />
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marktfinder" element={<MarktfinderPage />} />
            <Route path="/angebote" element={<AngebotePage />} />
            <Route path="/sortiment" element={<SortimentPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/ueber-uns" element={<UeberUnsPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
          </Routes>
        </main>
        <FloatingContactBar />
        <Footer />
      </div>
    </Router>);

}
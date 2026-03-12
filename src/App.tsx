import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/ContactIconButtons';
import { HomePage } from './pages/HomePage';
import { AngebotePage } from './pages/AngebotePage';
import { KontaktPage } from './pages/KontaktPage';
import { MarktfinderPage } from './pages/MarktfinderPage';
import { MarktDetailPage } from './pages/MarktDetailPage';
import { ServicePage } from './pages/ServicePage';
import { RecipesPage } from './pages/RecipesPage';
import { SortimentPage } from './pages/SortimentPage';
import { UeberUnsPage } from './pages/UeberUnsPage';
import { BlogPage } from './pages/BlogPage';


export function App() {
  return (
    <BrowserRouter>
 <Navbar />
      <div className="min-h-screen flex flex-col bg-gray-50">
       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/angebote" element={<AngebotePage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="/marktfinder" element={<MarktfinderPage />} />
            <Route
              path="/marktfinder/:marketId"
              element={<MarktDetailPage />} />

            <Route path="/service" element={<ServicePage />} />
            <Route path="/sortiment" element={<SortimentPage />} />
        

            <Route path="/ueber-uns" element={<UeberUnsPage />} />
       <Route path="/blog" element={<BlogPage />} />
<Route path="/recipes" element={<RecipesPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactBar />
      </div>
    </BrowserRouter>);

}
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Marktfinder',
    path: '/marktfinder',
    icon: <MapPin className="w-4 h-4 mr-1" />
  },
  {
    name: 'Angebote',
    path: '/angebote'
  },
  {
    name: 'Sortiment',
    path: '/sortiment'
  },
  {
    name: 'Service',
    path: '/service'
  },
  {
    name: 'Über uns',
    path: '/ueber-uns'
  },
  {
    name: 'Kontakt',
    path: '/kontakt'
  }];

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img
              src="/Getrankelandlogo.jpg"
              alt="GetränkeLAND Logo"
              className="h-12 w-auto object-contain" />

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center text-sm font-bold transition-colors duration-200 ${isActive(link.path) ? 'text-orange-600 border-b-2 border-orange-500' : 'text-navy-900 hover:text-orange-500'}`}>

                {link.icon}
                {link.name}
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-900 hover:text-orange-600 focus:outline-none"
              aria-label="Toggle menu">

              {isOpen ?
              <X className="h-6 w-6" /> :

              <Menu className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
      <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) =>
          <Link
            key={link.name}
            to={link.path}
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-orange-50 text-orange-600' : 'text-navy-900 hover:bg-gray-50 hover:text-orange-600'}`}>

                <div className="flex items-center">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
          )}
          </div>
        </div>
      }
    </nav>);

}
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuIcon, XIcon, MapPinIcon } from 'lucide-react';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
  {
    name: 'Marktfinder',
    path: '/marktfinder',
    icon: <MapPinIcon className="w-4 h-4 mr-1 inline" />
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

  const closeMenu = () => setIsOpen(false);
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
              onClick={closeMenu}>

              <img
                className="h-12 w-auto"
                src="/Getrankelandlogo.jpg"
                alt="GetränkeLAND Logo" />

            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) =>
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
              `text-base font-medium transition-colors duration-200 flex items-center ${isActive ? 'text-orange-500' : 'text-[#1E3A5F] hover:text-orange-500'}`
              }>

                {link.icon}
                {link.name}
              </NavLink>
            )}
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#1E3A5F] hover:text-orange-500 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded="false">

              <span className="sr-only">Open main menu</span>
              {isOpen ?
              <XIcon className="block h-6 w-6" aria-hidden="true" /> :

              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Panel */}
      {isOpen &&
      <div className="md:hidden absolute w-full bg-white border-b border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
          <NavLink
            key={link.name}
            to={link.path}
            onClick={closeMenu}
            className={({ isActive }) =>
            `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-orange-500 bg-orange-50' : 'text-[#1E3A5F] hover:text-orange-500 hover:bg-orange-50'}`
            }>

                {link.icon}
                {link.name}
              </NavLink>
          )}
          </div>
        </div>
      }
    </nav>);

}
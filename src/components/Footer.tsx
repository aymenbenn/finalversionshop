import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="bg-white p-2 inline-block rounded-lg mb-6">
              <img
                src="/Getrankelandlogo.jpg"
                alt="GetränkeLAND"
                className="h-10 w-auto" />

            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ihr regionaler Getränkefachmarkt mit großer Auswahl und
              freundlichem Service. Wir sind stolz auf über 30 Jahre Erfahrung
              und unsere regionale Verbundenheit.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors">

                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors">

                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-orange-500">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
              {
                name: 'Marktfinder',
                path: '/'
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
              }].
              map((link) =>
              <li key={link.name}>
                  <Link
                  to={link.path}
                  className="text-gray-300 hover:text-orange-500 transition-colors flex items-center">

                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 opacity-0 hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 text-orange-500">
              Kontakt
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  RMM GetränkeLAND
                  <br />
                  Bautzener Straße 1<br />
                  02692 Preuschwitz
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <a
                  href="tel:03591371323"
                  className="text-gray-300 hover:text-white transition-colors">

                  03591 371323
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@getraenkeland-rmm.de"
                  className="text-gray-300 hover:text-white transition-colors">

                  info@getraenkeland-rmm.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="mb-4 md:mb-0">
            © 2026 GetränkeLAND RMM. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/impressum"
              className="hover:text-white transition-colors">

              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="hover:text-white transition-colors">

              Datenschutzerklärung
            </Link>
            <Link to="/agb" className="hover:text-white transition-colors">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}
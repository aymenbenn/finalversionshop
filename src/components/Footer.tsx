import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
import { AnimatedBubbles } from './AnimatedBubbles';
export function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white pt-12 pb-8 relative overflow-hidden z-10">
      <AnimatedBubbles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              className="h-10 w-auto mb-4 bg-white p-1 rounded"
              src="/Getrankelandlogo.jpg"
              alt="GetränkeLAND Logo" />

            <p className="text-gray-300 text-sm leading-relaxed">
              Ihr regionaler Getränkefachmarkt mit großer Auswahl und
              freundlichem Service. Wir sind stolz auf über 30 Jahre Erfahrung
              und unsere regionale Verbundenheit.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/marktfinder"
                  className="text-gray-300 hover:text-white transition-colors">

                  Marktfinder
                </Link>
              </li>
              <li>
                <Link
                  to="/angebote"
                  className="text-gray-300 hover:text-white transition-colors">

                  Angebote
                </Link>
              </li>
              <li>
                <Link
                  to="/sortiment"
                  className="text-gray-300 hover:text-white transition-colors">

                  Sortiment
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="text-gray-300 hover:text-white transition-colors">

                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/ueber-uns"
                  className="text-gray-300 hover:text-white transition-colors">

                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-gray-300 hover:text-white transition-colors">

                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  RMM GetränkeLAND
                  <br />
                  Bautzener Straße 1<br />
                  02692 Preuschwitz
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
                <span className="text-gray-300">03591 371323</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="w-5 h-5 mr-3 text-orange-500 flex-shrink-0" />
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
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 GetränkeLAND RMM. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition-colors">

              Impressum
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition-colors">

              Datenschutzerklärung
            </Link>
            <Link
              to="#"
              className="text-gray-400 hover:text-white transition-colors">

              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}
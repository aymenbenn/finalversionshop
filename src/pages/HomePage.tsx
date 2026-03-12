import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPinIcon, TagIcon, ArrowRightIcon, BookOpenIcon } from 'lucide-react'
import { AnimatedBubbles } from '../components/AnimatedBubbles'

export function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FF7F50] via-orange-600 to-orange-500 text-white py-20 overflow-hidden">
        <AnimatedBubbles />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Willkommen bei <br />
                <span className="bg-white text-[#FF7F50] px-4 py-1 rounded-lg inline-block mt-2 shadow-lg">
                  GetränkeLAND
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-2 text-orange-50 max-w-lg">
                Ihr regionaler Experte für Getränke und mehr. Entdecken Sie unser großes Sortiment.
              </p>
              <p className="text-lg md:text-xl italic font-medium text-orange-100 mb-8 max-w-lg border-l-4 border-orange-300 pl-4">
                "Wir lieben Vielfalt – frisch, regional und nah."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/marktfinder"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#FF7F50] font-bold text-lg rounded-full hover:bg-gray-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <MapPinIcon className="w-6 h-6 mr-2" />
                  Markt finden
                </Link>
                <Link
                  to="/angebote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#FF7F50] text-white font-bold text-lg rounded-full hover:bg-orange-700 shadow-xl border border-orange-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <TagIcon className="w-6 h-6 mr-2" />
                  Aktuelle Angebote
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  to="/recipes"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <BookOpenIcon className="w-5 h-5 mr-2" />
                  Entdecken Sie unsere Rezepte & Trends
                  <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
               <img
                src="/hero.png"
                alt="GetränkeLAND Filiale"
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
              />


            </motion.div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto fill-orange-50/30"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white shadow-sm relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF7F50] mb-2">39</div>
            <div className="text-gray-700 font-medium">Filialen</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF7F50] mb-2">30+</div>
            <div className="text-gray-700 font-medium">Jahre Erfahrung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF7F50] mb-2">2000+</div>
            <div className="text-gray-700 font-medium">Artikel</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF7F50] mb-2">10k+</div>
            <div className="text-gray-700 font-medium">Zufriedene Kunden</div>
          </div>
        </div>
      </section>

      {/* Weekly Promo */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <span className="inline-block px-4 py-1 bg-red-100 text-red-600 font-bold rounded-full text-sm mb-6 w-max">
                Nur diese Woche!
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#FF7F50] mb-4">
                Sommer-Aktion: Corona Extra
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Holen Sie sich das Urlaubsfeeling nach Hause! Beim Kauf von einem Kasten Corona Extra erhalten Sie jetzt ein exklusives Strandtuch{' '}
                <strong className="text-[#FF7F50]">GRATIS</strong> dazu.
              </p>
              <div>
                <Link
                  to="/angebote"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#FF7F50] text-white font-bold rounded-full hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Zum Angebot
                </Link>
                <p className="text-xs text-gray-400 mt-4">
                  *Nur solange der Vorrat reicht
                </p>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto bg-orange-50">
           <img
                src="/promo.png"
                alt="Corona Extra Aktion"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sortiment Preview */}
      <section className="py-20 bg-orange-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF7F50] mb-4">
              Unser Sortiment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von regionalen Spezialitäten bis zu internationalen Marken – wir haben für jeden Durst das Richtige.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Link to="/sortiment" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-orange-100 hover:border-orange-500">
                <div className="h-48 overflow-hidden flex items-center justify-center">
                  <img src="/beer.png" alt="Bier" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-[#FF7F50] group-hover:text-orange-600 transition-colors">
                    Bier
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/sortiment" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-orange-100 hover:border-orange-500">
                <div className="h-48 overflow-hidden flex items-center justify-center">
                  <img src="/wein.jpg" alt="Wein & Sekt" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-[#FF7F50] group-hover:text-orange-600 transition-colors">
                    Wein & Sekt
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/sortiment" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-orange-100 hover:border-orange-500">
                 <div className="h-48 overflow-hidden flex items-center justify-center">
                  <img src="/wasser.png" alt="Wasser" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-[#FF7F50] group-hover:text-orange-600 transition-colors">
                    Wasser
                  </h3>
                </div>
              </div>
            </Link>
            <Link to="/sortiment" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 border border-orange-100 hover:border-orange-500">
                <div className="h-48 overflow-hidden flex items-center justify-center">
                  <img src="/limonaden.jpg" alt="Limonaden" className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-[#FF7F50] group-hover:text-orange-600 transition-colors">
                    Limonaden
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center">
            <Link
              to="/sortiment"
              className="inline-flex items-center text-[#FF7F50] font-semibold hover:text-orange-700 text-lg"
            >
              Gesamtes Sortiment entdecken{' '}
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-orange-200 rounded-3xl transform -rotate-3 z-0"></div>
              <img
              src="/interior.png"
              alt="GetränkeLAND Innenansicht"
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[500px]"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-orange-100 text-[#FF7F50] font-bold rounded-full text-sm mb-6">
              Seit 1996
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#FF7F50] mb-6">
              Über 30 Jahre GetränkeLAND
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Als familiengeführtes Unternehmen sind wir stolz auf unsere regionale Verbundenheit. Was als kleiner Getränkemarkt begann, ist heute zu einem festen Bestandteil der Region gewachsen.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Erfahren Sie mehr über unsere Geschichte, unsere Werte und unser Engagement für Nachhaltigkeit.
            </p>
            <Link
              to="/ueber-uns"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FF7F50] text-white font-bold rounded-full hover:bg-orange-700 transition-colors shadow-lg"
            >
              Mehr über uns
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
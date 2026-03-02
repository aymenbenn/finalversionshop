import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Star,
  ShoppingBag,
  Users,
  Store } from
'lucide-react';
import { BubbleDecor } from '../components/BubbleDecor';
export function HomePage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 text-white overflow-hidden">
        <BubbleDecor variant="light" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight">
                Willkommen im <br />
                <span className="text-navy-900 bg-white/90 px-4 py-1 rounded-lg inline-block transform -rotate-2 mt-2 shadow-lg">
                  GetränkeLAND
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-orange-50 font-medium max-w-lg leading-relaxed">
                Ihr regionaler Experte für erfrischende Vielfalt. Entdecken Sie
                unser großes Sortiment in 39 Filialen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-orange-600 bg-white hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">

                  <MapPin className="w-5 h-5 mr-2" />
                  Markt finden
                </Link>
                <Link
                  to="/angebote"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border-2 border-white/80 hover:bg-white/10 transition-all bg-[#FFA200]">

                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Aktuelle Angebote
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-orange-200 rounded-full filter blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
              <div className="relative rounded-2xl overflow-hidden border-8 border-white/20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/gpt-image-1.5-high-fidelity_a_make_a_me_shop_drink.png"
                  alt="GetränkeLAND Filiale"
                  className="w-full h-auto object-cover" />

              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto text-white fill-current">

            <path
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-12 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            {[
            {
              number: '39',
              label: 'Filialen',
              icon: Store
            },
            {
              number: '30+',
              label: 'Jahre Erfahrung',
              icon: Star
            },
            {
              number: '2000+',
              label: 'Artikel',
              icon: ShoppingBag
            },
            {
              number: '10k+',
              label: 'Zufriedene Kunden',
              icon: Users
            }].
            map((stat, idx) =>
            <div
              key={idx}
              className="p-4 group hover:bg-orange-50/50 rounded-xl transition-colors">

                <div className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-navy-900 font-medium text-lg flex items-center justify-center gap-2">
                  {stat.label}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Deal Highlight */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50 relative overflow-hidden">
        <BubbleDecor variant="orange" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full self-start mb-4 animate-pulse">
                  Nur diese Woche!
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
                  Sommer-Aktion:{' '}
                  <span className="text-orange-600">Corona Extra</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Holen Sie sich das Urlaubsfeeling nach Hause! Beim Kauf von
                  einem Kasten Corona Extra erhalten Sie jetzt ein exklusives
                  Strandtuch GRATIS dazu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link
                    to="/angebote"
                    className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all text-center">

                    Zum Angebot
                  </Link>
                  <span className="text-xs text-gray-400">
                    *Nur solange der Vorrat reicht
                  </span>
                </div>
              </div>
              <div className="relative h-64 md:h-auto bg-navy-900 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800"></div>
                {/* Decorative circles behind image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl"></div>
                <img
                  src="/Group_1_(1).png"
                  alt="Corona Extra Aktion"
                  className="relative z-10 w-4/5 h-auto object-contain transform group-hover:scale-110 transition-transform duration-500" />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sortiment Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-4">
              Unser Sortiment
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Von regionalen Spezialitäten bis zu internationalen Marken – wir
              haben für jeden Durst das Richtige.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
            {
              name: 'Bier',
              icon: '🍺',
              color: 'from-amber-400 to-orange-500'
            },
            {
              name: 'Wein & Sekt',
              icon: '🍷',
              color: 'from-red-400 to-pink-600'
            },
            {
              name: 'Wasser',
              icon: '💧',
              color: 'from-blue-400 to-cyan-500'
            },
            {
              name: 'Limonaden',
              icon: '🥤',
              color: 'from-yellow-400 to-orange-500'
            }].
            map((cat) =>
            <Link
              key={cat.name}
              to="/sortiment"
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-2">

                <div className={`h-3 bg-gradient-to-r ${cat.color}`}></div>
                <div className="p-8 text-center">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-orange-600 transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/sortiment"
              className="inline-flex items-center text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors group">

              Gesamtes Sortiment entdecken
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-[#FFFBF5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-orange-200 rounded-2xl transform -rotate-2"></div>
              <img
                src="/gemini-3-pro-image-preview_b_make_a_me_shop_drink.png"
                alt="GetränkeLAND Geschichte"
                className="relative rounded-xl shadow-lg w-full h-auto" />

            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-1 rounded-full text-sm font-bold mb-6">
                Seit 1996
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-navy-900 mb-6">
                Über 30 Jahre <br />
                GetränkeLAND
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Als familiengeführtes Unternehmen sind wir stolz auf unsere
                regionale Verbundenheit. Was als kleiner Getränkemarkt begann,
                ist heute zu einem festen Bestandteil der Region gewachsen.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Erfahren Sie mehr über unsere Geschichte, unsere Werte und unser
                Engagement für Nachhaltigkeit.
              </p>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center justify-center px-8 py-3 bg-navy-900 text-white font-bold rounded-xl hover:bg-navy-800 transition-colors shadow-lg">

                Mehr über uns
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>);

}
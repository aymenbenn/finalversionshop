import React from 'react';
import { Tag, Download, ShoppingCart, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
import { PhoneButton, LocationButton } from '../components/ContactIconButtons';
export function AngebotePage() {
  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aktuelle Angebote
          </h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Entdecken Sie unsere wöchentlichen Highlights und sparen Sie bei
            Ihrem nächsten Einkauf.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Section 1: Prospekt */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              Aktueller Prospekt
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-slate-100 p-8 flex items-center justify-center border-r border-gray-100">
              <div className="w-48 h-64 bg-white shadow-md border border-gray-200 rounded flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="absolute top-0 w-full bg-red-600 text-white text-xs font-bold text-center py-1">
                  Gültig bis 15.08.
                </div>
                <FileText className="w-16 h-16 mb-2 opacity-50" />
                <span className="font-medium">Vorschau</span>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                Wochenangebote entdecken
              </h3>
              <p className="text-gray-600 mb-6">
                Gültig von Montag, 09.08. bis Samstag, 15.08.
              </p>
              <p className="text-gray-600 mb-8 max-w-lg">
                Blättern Sie durch unseren aktuellen Prospekt und entdecken Sie
                alle Angebote der Woche bequem von zu Hause aus.
              </p>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-md w-max">
                <Download className="w-5 h-5 mr-2" />
                Prospekt herunterladen (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: Highlights */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <Tag className="w-8 h-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              Highlights der Woche
            </h2>
          </div>

          {/* Top Deal */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 mb-8 relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white px-6 py-2 rounded-bl-2xl font-bold z-10 shadow-md">
              Gültig bis Samstag
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center mb-4">
                  <Tag className="w-6 h-6 text-orange-600 mr-2" />
                  <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">
                    Top Deal der Woche
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
                  Sommer-Aktion: Corona Extra
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Beim Kauf von einem Kasten Corona Extra erhalten Sie ein
                  exklusives Strandtuch{' '}
                  <strong className="text-orange-600">GRATIS</strong> dazu!
                  Perfekt für den nächsten Strandtag oder das Picknick im Park.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 flex items-center justify-center px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-md">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Jetzt im Markt finden
                  </button>
                </div>
              </div>
              <div className="relative h-64 lg:h-auto bg-[#1E3A5F] order-1 lg:order-2">
                <img
                  src="/Group_1_(1).png"
                  alt="Corona Extra Angebot"
                  className="absolute inset-0 w-full h-full object-cover" />

              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10">
                -20%
              </div>
              <div className="text-6xl text-center mb-6 mt-4 transform group-hover:scale-110 transition-transform">
                🍺
              </div>
              <h4 className="text-xl font-bold text-[#1E3A5F] mb-2 text-center">
                Radeberger Pilsner
              </h4>
              <p className="text-gray-500 text-center mb-6">
                20 x 0,5l Kasten + Pfand
              </p>
              <div className="flex justify-center items-end gap-3">
                <span className="text-gray-400 line-through text-lg">
                  Statt 13.99 €
                </span>
                <span className="text-3xl font-bold text-orange-600">
                  10.99 €
                </span>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10">
                -15%
              </div>
              <div className="text-6xl text-center mb-6 mt-4 transform group-hover:scale-110 transition-transform">
                🥤
              </div>
              <h4 className="text-xl font-bold text-[#1E3A5F] mb-2 text-center">
                Coca-Cola Kiste
              </h4>
              <p className="text-gray-500 text-center mb-6">
                12 x 1,0l PET + Pfand
              </p>
              <div className="flex justify-center items-end gap-3">
                <span className="text-gray-400 line-through text-lg">
                  Statt 12.49 €
                </span>
                <span className="text-3xl font-bold text-orange-600">
                  9.99 €
                </span>
              </div>
            </div>

            {/* Offer 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-3 py-1 rounded-full z-10">
                -25%
              </div>
              <div className="text-6xl text-center mb-6 mt-4 transform group-hover:scale-110 transition-transform">
                🍾
              </div>
              <h4 className="text-xl font-bold text-[#1E3A5F] mb-2 text-center">
                Rotkäppchen Sekt
              </h4>
              <p className="text-gray-500 text-center mb-6">0,75l Flasche</p>
              <div className="flex justify-center items-end gap-3">
                <span className="text-gray-400 line-through text-lg">
                  Statt 3.99 €
                </span>
                <span className="text-3xl font-bold text-orange-600">
                  2.99 €
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Produktpalette */}
        <div>
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">
            Unsere Produktpalette
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
            {
              name: 'Bier',
              gradient: 'from-amber-500 to-yellow-600'
            },
            {
              name: 'Wein',
              gradient: 'from-purple-500 to-rose-500'
            },
            {
              name: 'Wasser',
              gradient: 'from-blue-400 to-cyan-500'
            },
            {
              name: 'Limonaden',
              gradient: 'from-red-400 to-orange-500'
            },
            {
              name: 'Säfte',
              gradient: 'from-green-400 to-emerald-500'
            },
            {
              name: 'Spirituosen',
              gradient: 'from-slate-600 to-slate-800'
            }].
            map((cat) =>
            <Link
              key={cat.name}
              to="/sortiment"
              className="group block h-32 rounded-xl overflow-hidden relative shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">

                <div
                className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}>
              </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <span className="font-bold text-lg">{cat.name}</span>
                  <ArrowRight className="w-4 h-4 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>);

}
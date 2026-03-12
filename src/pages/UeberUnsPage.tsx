import React from 'react'
import {
  LeafIcon,
  HeartIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  TruckIcon,
  UsersIcon,
  TrophyIcon
} from 'lucide-react'
import { AnimatedBubbles } from '../components/AnimatedBubbles'

export function UeberUnsPage() {
  return (
    <div className="w-full pb-20">

      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Über GetränkeLAND
          </h1>

          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Seit über 30 Jahren Ihr zuverlässiger Partner für Getränke in der
            Region. Familiengeführt, bodenständig und immer nah am Kunden.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">

        {/* JOBS SECTION MOVED TO TOP */}
        <div className="bg-[#1E3A5F] rounded-3xl p-8 md:p-12 text-white mb-20">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-4 text-orange-500">
                Karriere bei GetränkeLAND
              </h2>

              <p className="text-lg text-gray-300 mb-6">
                Wir suchen ständig motivierte Mitarbeiter für unsere Märkte
                sowie neue Standorte zur Miete oder Pacht (250 – 450 m²).
                Werden Sie Teil unseres familiären Teams!
              </p>

              <ul className="space-y-3 mb-8">

                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Verkäufer/in (m/w/d) in Voll- oder Teilzeit
                </li>

                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Marktleiter/in (m/w/d)
                </li>

                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Aushilfen (m/w/d) auf 520€ Basis
                </li>

              </ul>

            </div>

            <div className="bg-white rounded-2xl p-8 text-[#1E3A5F] flex flex-col justify-center text-center">

              <BriefcaseIcon className="w-12 h-12 text-orange-600 mx-auto mb-4" />

              <h3 className="text-2xl font-bold mb-2">
                Interesse geweckt?
              </h3>

              <p className="text-gray-600 mb-6">
                Entdecken Sie alle offenen Stellen und bewerben Sie sich direkt
                online.
              </p>

              <button className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors flex items-center justify-center group shadow-md">

                Alle Stellenangebote

                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />

              </button>

            </div>

          </div>

        </div>

        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          <div>

            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">
              Unsere Geschichte
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Was als kleiner Getränkemarkt begann, ist heute zu einem festen
              Bestandteil der Region gewachsen. Mit mittlerweile 39 Filialen
              in Sachsen und Südbrandenburg sind wir stolz darauf, unsere
              Kunden täglich mit einer großen Auswahl und persönlichem
              Service zu begeistern.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Als Familienunternehmen legen wir besonderen Wert auf langfristige
              Beziehungen – zu unseren Kunden, unseren Mitarbeitern und unseren
              Lieferanten.
            </p>

          </div>

          <div className="relative">

            <div className="absolute -inset-4 bg-orange-200 rounded-3xl transform rotate-3 z-0"></div>

            <img
              src="/image.jpg"
              alt="GetränkeLAND Historie"
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[400px]"
            />

          </div>

        </div>

        {/* Rest of sections stay unchanged */}

      </div>
    </div>
  )
}
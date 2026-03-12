import React from 'react';
import {
  LeafIcon,
  HeartIcon,
  BriefcaseIcon,
  ArrowRightIcon,
  TruckIcon,
  UsersIcon,
  TrophyIcon } from
'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
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
        {/* History Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">
              Unsere Geschichte
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Was als kleiner Getränkemarkt begann, ist heute zu einem festen
              Bestandteil der Region gewachsen. Mit mittlerweile 39 Filialen in
              Sachsen und Südbrandenburg sind wir stolz darauf, unsere Kunden
              täglich mit einer großen Auswahl und persönlichem Service zu
              begeistern.
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
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[400px]" />

          </div>
        </div>

        {/* Nachhaltigkeit & Verantwortung */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Nachhaltigkeit & Verantwortung
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wir übernehmen Verantwortung für unsere Region und die Umwelt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <LeafIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                Mehrweg-Fokus
              </h3>
              <p className="text-sm text-gray-600">
                Wir fördern aktiv den Verkauf von umweltfreundlichen
                Mehrwegverpackungen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                Regionale Partner
              </h3>
              <p className="text-sm text-gray-600">
                Enge Zusammenarbeit mit lokalen Brauereien und Brunnen stärkt
                die Region.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                Kurze Wege
              </h3>
              <p className="text-sm text-gray-600">
                Durch regionale Lieferanten reduzieren wir Transportwege und
                CO2-Emissionen.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
                Soziales Engagement
              </h3>
              <p className="text-sm text-gray-600">
                Wir unterstützen lokale Projekte und Vereine in unserem
                Einzugsgebiet.
              </p>
            </div>
          </div>
        </div>

        {/* Galerie */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-8 text-center">
            Einblicke in unsere Märkte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src="/interior.png"
              alt="GetränkeLAND Markt außen"
              className="w-full h-64 object-cover rounded-2xl shadow-md" />

            <img
              src="/image-3.JPG"
              alt="GetränkeLAND Markt innen"
              className="w-full h-64 object-cover rounded-2xl shadow-md" />

            <img
              src="/image.jpg"
              alt="GetränkeLAND Sortiment"
              className="w-full h-64 object-cover rounded-2xl shadow-md" />

          </div>
        </div>

        {/* Sponsoring */}
        <div className="mb-24 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
              Sponsoring & Engagement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Als regionales Unternehmen ist es uns eine Herzensangelegenheit,
              das kulturelle und sportliche Leben vor Ort zu fördern.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <TrophyIcon className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Sportvereine
              </h3>
              <p className="text-gray-600">
                Wir unterstützen lokale Sportvereine mit Ausrüstung und
                Getränkesponsoring für Turniere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <UsersIcon className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Kulturveranstaltungen
              </h3>
              <p className="text-gray-600">
                Von Stadtfesten bis zu Konzerten – wir sind als Getränkepartner
                bei vielen Events dabei.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <HeartIcon className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">
                Gemeinnützige Projekte
              </h3>
              <p className="text-gray-600">
                Wir fördern soziale Einrichtungen und Projekte, die das
                Miteinander in der Region stärken.
              </p>
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className="bg-[#1E3A5F] rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-orange-500">
                Karriere bei GetränkeLAND
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Wir suchen ständig motivierte Mitarbeiter für unsere Märkte
                sowie neue Standorte zur Miete oder Pacht (250 – 450 m²). Werden
                Sie Teil unseres familiären Teams!
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
              <h3 className="text-2xl font-bold mb-2">Interesse geweckt?</h3>
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
      </div>
    </div>);

}
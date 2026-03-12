import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, MessageCircleIcon } from 'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';

export function ServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Welche Services bieten Sie im Markt an?',
      a: 'Neben unserem Lebensmittelsortiment bieten viele unserer Märkte zusätzliche Services wie eine Postfiliale, Lotto-Annahmestelle, Bargeldabhebung an der Kasse und einen Lieferservice an.'
    },
    {
      q: 'Bieten Sie einen Lieferservice an?',
      a: 'Einige unserer Filialen bieten einen lokalen Lieferservice an. Bitte kontaktieren Sie Ihren Markt vor Ort für weitere Informationen.'
    },
    {
      q: 'Kann ich bei Ihnen Bargeld abheben?',
      a: 'Ja, ab einem Einkaufswert von 10€ können Sie an unseren Kassen gebührenfrei bis zu 200€ Bargeld abheben.'
    },
    {
      q: 'Haben Sie Geschenkgutscheine?',
      a: 'Ja, Geschenkgutscheine können Sie in jeder unserer Filialen erwerben. Der Betrag ist frei wählbar.'
    }
  ];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Service</h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Mehr als nur Einkaufen – wir bieten Ihnen praktische Services für
            Ihren Alltag.
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col">
          <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
            <img
              src="/post_service.JPG"
              alt="Post & Paket Service"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#2d5a27] mb-4">Post & Paket Service</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Erledigen Sie Ihre Postgeschäfte direkt beim Einkauf. In vielen
            unserer Märkte finden Sie eine integrierte Postfiliale oder
            Paketshop.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-700 font-medium">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
              Paketannahme & -abholung
            </li>
            <li className="flex items-center text-gray-700 font-medium">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
              Briefmarkenverkauf
            </li>
            <li className="flex items-center text-gray-700 font-medium">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
              Retourenabwicklung
            </li>
          </ul>
          <button className="w-full py-4 bg-[#2d5a27] text-white font-bold rounded-xl hover:bg-orange-800 transition-colors flex items-center justify-center">
            <MessageCircleIcon className="w-5 h-5 mr-2" />
            Markt kontaktieren
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col">
          <div className="w-full h-48 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
            <img
              src="/lotto_service.png"
              alt="Lotto & Mehr"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#2d5a27] mb-4">Lotto, Gutscheine & Mehr</h2>
          <p className="text-gray-600 mb-6 flex-grow">
            Nutzen Sie unsere zusätzlichen Services an der Kasse. Von
            Lotto-Annahme bis hin zu Geschenkkarten für viele bekannte Marken.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-700 font-medium">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
              Lotto-Annahmestelle
            </li>
            <li className="flex items-center text-gray-700 font-medium">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
              Geschenkkarten & Gutscheine
            </li>
            <li className="flex items-center text-gray-700 font-medium">
              <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
              Bargeldabhebung ab 10€ Einkaufswert
            </li>
          </ul>
          <button className="w-full py-4 border-2 border-[#2d5a27] text-[#2d5a27] font-bold rounded-xl hover:bg-orange-50 transition-colors">
            Mehr erfahren
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-[#2d5a27] mb-8 text-center">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-[#2d5a27] pr-4">{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-orange-600 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 border-t border-gray-100 pt-4">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
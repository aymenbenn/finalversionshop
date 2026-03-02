import React, { useState } from 'react';
import {
  Truck,
  Gift,
  ChevronDown,
  ChevronUp,
  MessageCircle } from
'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
import { PhoneButton, WhatsAppButton } from '../components/ContactIconButtons';
export function ServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const faqs = [
  {
    q: 'Welche Marken und Produkte führen Sie?',
    a: 'Wir führen ein breites Sortiment an regionalen und internationalen Marken in den Bereichen Bier, Wasser, Softdrinks, Säfte, Wein und Spirituosen.'
  },
  {
    q: 'Bieten Sie Lieferungen an?',
    a: 'Unser Lieferservice ist für Großbestellungen und Veranstaltungen verfügbar. Bitte kontaktieren Sie Ihre lokale Filiale für Details.'
  },
  {
    q: 'Kann ich Produkte auf Kommission kaufen?',
    a: 'Ja, für Ihre Feier bieten wir den Kauf auf Kommission an. Sie zahlen nur, was Sie verbrauchen. Volle Kästen nehmen wir zurück.'
  },
  {
    q: 'Vermieten Sie Ausschankwagen oder Kühltechnik?',
    a: 'Ja, wir vermieten Ausschankwagen, Kühlanhänger, Zapfanlagen und Durchlaufkühler für Ihre Veranstaltung.'
  },
  {
    q: 'Wo kann ich Gutscheine kaufen?',
    a: 'Geschenkgutscheine können Sie in jeder unserer 39 Filialen erwerben. Der Betrag ist frei wählbar.'
  }];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Service</h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Mehr als nur Getränke – wir unterstützen Sie bei Ihrer Feier und
            bieten praktische Extras.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
              <Truck className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">
              Leihinventar & Festservice
            </h2>
            <p className="text-gray-600 mb-6 flex-grow">
              Planen Sie eine Feier? Wir statten Sie aus! Von der
              Bierzeltgarnitur bis zum Kühlwagen – wir haben das passende
              Equipment für Veranstaltungen jeder Größe.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Ausschankwagen & Kühlhänger
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Zapfanlagen & Durchlaufkühler
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Bierzeltgarnituren & Stehtische
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Kauf auf Kommission
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="w-full py-4 bg-[#1E3A5F] text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Anfrage stellen
              </button>
              <PhoneButton
                href="tel:03591371323"
                size="md"
                className="flex-shrink-0" />

              <WhatsAppButton
                href="https://wa.me/03591371323"
                size="md"
                className="flex-shrink-0" />

            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 flex flex-col">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
              <Gift className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">
              Gutscheine & Präsente
            </h2>
            <p className="text-gray-600 mb-6 flex-grow">
              Suchen Sie das passende Geschenk? Mit einem GetränkeLAND Gutschein
              liegen Sie immer richtig. Oder lassen Sie sich von uns einen
              individuellen Präsentkorb zusammenstellen.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Geschenkgutscheine (Betrag frei wählbar)
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Individuelle Präsentkörbe
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Firmenpräsente
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                Verpackungsservice
              </li>
            </ul>
            <div className="flex gap-4">
              <button className="w-full py-4 border-2 border-orange-600 text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors">
                Mehr erfahren
              </button>
              <PhoneButton
                href="tel:03591371323"
                size="md"
                className="flex-shrink-0" />

            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-8 text-center">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) =>
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">

                  <span className="font-bold text-[#1E3A5F] pr-4">{faq.q}</span>
                  {openFaq === index ?
                <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" /> :

                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                }
                </button>

                <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>

                  <p className="text-gray-600 border-t border-gray-100 pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}
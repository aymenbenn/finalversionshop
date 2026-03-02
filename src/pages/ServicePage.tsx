import React, { useState } from 'react';
import { BubbleDecor } from '../components/BubbleDecor';
import { Tent, Gift, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
export function ServicePage() {
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

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <main className="flex-grow bg-[#FFFBF5]">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16 overflow-hidden">
        <BubbleDecor variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Unser Service
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Mehr als nur Getränke – wir unterstützen Sie bei Ihrer Feier und
            bieten praktische Extras.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-orange-500 group hover:-translate-y-1 transition-transform duration-300">
            <div className="p-8 md:p-10">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                <Tent className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Leihinventar & Festservice
              </h2>
              <p className="text-gray-600 mb-6">
                Planen Sie eine Feier? Wir statten Sie aus! Von der
                Bierzeltgarnitur bis zum Kühlwagen – wir haben das passende
                Equipment für Veranstaltungen jeder Größe.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                'Ausschankwagen & Kühlhänger',
                'Zapfanlagen & Durchlaufkühler',
                'Bierzeltgarnituren & Stehtische',
                'Kauf auf Kommission'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-center text-navy-900 font-medium">

                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                )}
              </ul>
              <button className="w-full py-3 bg-navy-900 text-white font-bold rounded-xl hover:bg-orange-600 transition-colors">
                Anfrage stellen
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-t-4 border-blue-500 group hover:-translate-y-1 transition-transform duration-300">
            <div className="p-8 md:p-10">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Gift className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Gutscheine & Präsente
              </h2>
              <p className="text-gray-600 mb-6">
                Suchen Sie das passende Geschenk? Mit einem GetränkeLAND
                Gutschein liegen Sie immer richtig. Oder lassen Sie sich von uns
                einen individuellen Präsentkorb zusammenstellen.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                'Geschenkgutscheine (Betrag frei wählbar)',
                'Individuelle Präsentkörbe',
                'Firmenpräsente',
                'Verpackungsservice'].
                map((item, i) =>
                <li
                  key={i}
                  className="flex items-center text-navy-900 font-medium">

                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                )}
              </ul>
              <button className="w-full py-3 bg-white border-2 border-navy-900 text-navy-900 font-bold rounded-xl hover:bg-navy-50 transition-colors">
                Mehr erfahren
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-full text-orange-600 mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-navy-900">
              Häufig gestellte Fragen
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) =>
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

                <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>

                  <span className="font-bold text-navy-900">{faq.q}</span>
                  {openFaq === idx ?
                <ChevronUp className="text-orange-500" /> :

                <ChevronDown className="text-gray-400" />
                }
                </button>
                <div
                className={`px-6 text-gray-600 transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>

                  {faq.a}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>);

}
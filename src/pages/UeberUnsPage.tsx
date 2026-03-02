import React from 'react';
import { BubbleDecor } from '../components/BubbleDecor';
import { Leaf, Heart, Users, Briefcase, ArrowRight } from 'lucide-react';
export function UeberUnsPage() {
  return (
    <main className="flex-grow bg-[#FFFBF5]">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16 overflow-hidden">
        <BubbleDecor variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Über GetränkeLAND
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Seit über 30 Jahren Ihr zuverlässiger Partner für Getränke in der
            Region. Familiengeführt, bodenständig und immer nah am Kunden.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-navy-900 rounded-2xl transform rotate-2 opacity-10"></div>
              <img
                src="/gemini-3-pro-image-preview_b_make_a_me_shop_drink.png"
                alt="GetränkeLAND Filiale"
                className="relative rounded-xl shadow-xl w-full h-auto" />

            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Was als kleiner Getränkemarkt begann, ist heute zu einem
                  festen Bestandteil der Region gewachsen. Mit mittlerweile 39
                  Filialen in Sachsen und Südbrandenburg sind wir stolz darauf,
                  unsere Kunden täglich mit einer großen Auswahl und
                  persönlichem Service zu begeistern.
                </p>
                <p>
                  Als Familienunternehmen legen wir besonderen Wert auf
                  langfristige Beziehungen – zu unseren Kunden, unseren
                  Mitarbeitern und unseren Lieferanten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              title: 'Nachhaltigkeit',
              icon: Leaf,
              desc: 'Wir setzen auf Mehrweg und kurze Transportwege. Durch die Zusammenarbeit mit regionalen Brauereien und Brunnen schonen wir die Umwelt.',
              color: 'text-green-600',
              bg: 'bg-green-50'
            },
            {
              title: 'Verantwortung',
              icon: Heart,
              desc: 'Wir engagieren uns in der Region und unterstützen lokale Vereine und Veranstaltungen. Soziales Miteinander ist uns wichtig.',
              color: 'text-red-500',
              bg: 'bg-red-50'
            },
            {
              title: 'Karriere',
              icon: Users,
              desc: 'Wir suchen ständig motivierte Mitarbeiter für unsere Märkte. Werden Sie Teil der GetränkeLAND Familie!',
              color: 'text-blue-600',
              bg: 'bg-blue-50'
            }].
            map((value, idx) =>
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow text-center">

                <div
                className={`w-16 h-16 ${value.bg} ${value.color} rounded-full flex items-center justify-center mx-auto mb-6`}>

                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-50"></div>
        <BubbleDecor variant="orange" className="opacity-50" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16">
            <div className="inline-flex items-center justify-center p-4 bg-navy-50 rounded-full text-navy-900 mb-6">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-6">
              Stellenausschreibungen
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wir suchen neue Getränkemärkte zur Miete / Pacht (250 – 450 m²)
              und engagierte Mitarbeiter/innen.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
              {[
              'Verkäufer/in (m/w/d) in Voll- oder Teilzeit',
              'Marktleiter/in (m/w/d)',
              'Aushilfen (m/w/d) auf 520€ Basis'].
              map((job, i) =>
              <div
                key={i}
                className="bg-gray-50 p-4 rounded-xl border border-gray-100 font-medium text-navy-900 flex items-center">

                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                  {job}
                </div>
              )}
            </div>

            <div className="bg-navy-900 text-white p-6 rounded-xl mb-8 inline-block w-full max-w-md">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                Ansprechpartner
              </p>
              <p className="text-xl font-bold">Herr David Horn</p>
            </div>

            <button className="w-full md:w-auto px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors shadow-lg flex items-center justify-center mx-auto">
              Jetzt bewerben <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </main>);

}
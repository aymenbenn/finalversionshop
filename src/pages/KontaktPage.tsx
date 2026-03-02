import React from 'react';
import { BubbleDecor } from '../components/BubbleDecor';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
export function KontaktPage() {
  return (
    <main className="flex-grow bg-[#FFFBF5]">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16 overflow-hidden">
        <BubbleDecor variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Kontakt
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Haben Sie Fragen, Anregungen oder Wünsche? Wir sind gerne für Sie
            da.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    Firmensitz
                  </h3>
                  <p className="text-gray-600">
                    RMM GetränkeLAND
                    <br />
                    Bautzener Straße 1<br />
                    02692 Preuschwitz
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    Telefon & Fax
                  </h3>
                  <p className="text-gray-600">
                    Tel: 03591 371323
                    <br />
                    Fax: 03591 371319
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-orange-500">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    E-Mail
                  </h3>
                  <a
                    href="mailto:info@getraenkeland-rmm.de"
                    className="text-orange-600 hover:underline">

                    info@getraenkeland-rmm.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
              <h2 className="text-2xl font-heading font-bold text-navy-900 mb-8">
                Schreiben Sie uns
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="vorname"
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Vorname
                    </label>
                    <input
                      type="text"
                      id="vorname"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="Max" />

                  </div>
                  <div>
                    <label
                      htmlFor="nachname"
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Nachname
                    </label>
                    <input
                      type="text"
                      id="nachname"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="Mustermann" />

                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2">

                      E-Mail Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="max@beispiel.de" />

                  </div>
                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-medium text-gray-700 mb-2">

                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                      placeholder="+49 ..." />

                  </div>
                </div>

                <div>
                  <label
                    htmlFor="betreff"
                    className="block text-sm font-medium text-gray-700 mb-2">

                    Betreff
                  </label>
                  <input
                    type="text"
                    id="betreff"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                    placeholder="Worum geht es?" />

                </div>

                <div>
                  <label
                    htmlFor="nachricht"
                    className="block text-sm font-medium text-gray-700 mb-2">

                    Nachricht
                  </label>
                  <textarea
                    id="nachricht"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none"
                    placeholder="Ihre Nachricht an uns...">
                  </textarea>
                </div>

                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1" />

                  <label
                    htmlFor="privacy"
                    className="ml-2 block text-sm text-gray-600">

                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <a href="#" className="text-orange-600 hover:underline">
                      Datenschutzerklärung
                    </a>{' '}
                    zu.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center">

                  <Send className="w-5 h-5 mr-2" />
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>);

}
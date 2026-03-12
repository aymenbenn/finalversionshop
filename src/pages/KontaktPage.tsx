import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from 'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
export function KontaktPage() {
  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Haben Sie Fragen, Anregungen oder Wünsche? Wir sind gerne für Sie
            da.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <MapPinIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
              Firmensitz
            </h3>
            <p className="text-gray-600">
              RMM GetränkeLAND
              <br />
              Bautzener Straße 1<br />
              02692 Preuschwitz
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
              Telefon & Fax
            </h3>
            <p className="text-gray-600">
              Tel: 03591 371323
              <br />
              Fax: 03591 371319
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-4">
              <MailIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">E-Mail</h3>
            <a
              href="mailto:info@getraenkeland-rmm.de"
              className="text-orange-600 hover:text-orange-700 font-medium">

              info@getraenkeland-rmm.de
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-[#1E3A5F] p-8 text-white text-center">
            <h2 className="text-2xl font-bold">Schreiben Sie uns</h2>
          </div>
          <form
            className="p-8 md:p-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}>

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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-shadow"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-shadow"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-shadow"
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
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-shadow"
                  placeholder="0123 456789" />

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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-shadow"
                placeholder="Ihr Anliegen" />

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
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-600 focus:border-orange-600 outline-none transition-shadow resize-none"
                placeholder="Wie können wir Ihnen helfen?">
              </textarea>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="datenschutz"
                  type="checkbox"
                  className="w-5 h-5 text-orange-600 border-gray-300 rounded focus:ring-orange-600" />

              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="datenschutz"
                  className="font-medium text-gray-700">

                  Ich stimme der Verarbeitung meiner Daten gemäß der
                  Datenschutzerklärung zu.
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors flex items-center justify-center shadow-md">

              <SendIcon className="w-5 h-5 mr-2" />
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </div>);

}
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
  BriefcaseIcon,
  CalendarIcon,
  DownloadIcon,
  MessageCircleIcon,
  CameraIcon,
  FileTextIcon } from
'lucide-react';
import { stores } from './MarktfinderPage';
export function MarktDetailPage() {
  const { marketId } = useParams();
  const store = stores.find((s) => s.id === marketId);
  if (!store) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-[#2d5a27] mb-4">
          Markt nicht gefunden
        </h1>
        <Link
          to="/marktfinder"
          className="text-green-600 hover:underline flex items-center">

          <ArrowLeftIcon className="w-4 h-4 mr-2" /> Zurück zum Marktfinder
        </Link>
      </div>);

  }
  return (
    <div className="w-full pb-20 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-gray-200 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <CameraIcon className="w-16 h-16 text-gray-400 absolute z-0" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{store.name}</h1>
          <p className="text-lg md:text-xl opacity-90">{store.zipCity}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <Link
          to="/marktfinder"
          className="inline-flex items-center px-4 py-2 bg-white text-[#2d5a27] font-medium rounded-full shadow-md hover:bg-gray-50 transition-colors mb-6">

          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Zurück zur Übersicht
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Info & Contact */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-[#2d5a27] mb-4">
                Kontakt & Öffnungszeiten
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p>{store.address}</p>
                    <p>{store.zipCity}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" />
                  <p>{store.phone}</p>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">
                      Montag - Samstag
                    </p>
                    <p>07:00 - 20:00 Uhr</p>
                    <p className="font-medium text-gray-800 mt-2">Sonntag</p>
                    <p>Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Careers Link */}
            <div className="bg-[#2d5a27] rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center mb-3">
                <BriefcaseIcon className="w-6 h-6 mr-2 text-green-300" />
                <h3 className="text-lg font-bold">Werden Sie Teil des Teams</h3>
              </div>
              <p className="text-green-50 mb-4 text-sm">
                Wir suchen Verstärkung für unseren Markt in {store.filterCity}.
              </p>
              <a
                href="#"
                className="inline-block w-full text-center py-2 bg-white text-[#2d5a27] font-bold rounded-lg hover:bg-gray-100 transition-colors">

                Karriere bei uns
              </a>
            </div>

            {/* WhatsApp Channel */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <MessageCircleIcon className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-[#2d5a27]">
                  WhatsApp Kanal
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Verpassen Sie keine Angebote und Neuigkeiten aus Ihrem Markt.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">

                Kanal abonnieren
              </a>
            </div>
          </div>

          {/* Right Column: Photos, Events, Brochure */}
          <div className="lg:col-span-2 space-y-8">
            {/* Photo Gallery */}
            <section>
              <h2 className="text-2xl font-bold text-[#2d5a27] mb-4">
                Unser Markt
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div
                  key={i}
                  className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden relative group">

                    <CameraIcon className="w-8 h-8 text-gray-400 absolute" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                )}
              </div>
            </section>

            {/* Brochure */}
            <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-32 h-40 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 flex-shrink-0">
                <FileTextIcon className="w-10 h-10 text-gray-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#2d5a27] mb-2">
                  Aktueller Prospekt
                </h2>
                <p className="text-gray-600 mb-4">
                  Entdecken Sie die Angebote der Woche in Ihrem {store.name}.
                </p>
                <button className="inline-flex items-center px-6 py-2 bg-[#2d5a27] text-white font-bold rounded-lg hover:bg-green-800 transition-colors">
                  <DownloadIcon className="w-4 h-4 mr-2" />
                  Prospekt ansehen
                </button>
              </div>
            </section>

            {/* Events */}
            <section>
              <h2 className="text-2xl font-bold text-[#2d5a27] mb-4 flex items-center">
                <CalendarIcon className="w-6 h-6 mr-2 text-green-600" />
                Veranstaltungen
              </h2>
              <div className="space-y-4">
                {[
                {
                  date: '15. Okt',
                  title: 'Regionale Verkostung',
                  desc: 'Probieren Sie Spezialitäten von Bauern aus der Umgebung.'
                },
                {
                  date: '02. Nov',
                  title: 'Weinabend',
                  desc: 'Entdecken Sie neue Weine passend zur Saison.'
                }].
                map((event, i) =>
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex gap-4 items-start hover:shadow-md transition-shadow">

                    <div className="bg-green-50 text-green-800 rounded-lg p-3 text-center min-w-[80px] flex-shrink-0">
                      <span className="block font-bold text-lg">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="block text-sm">
                        {event.date.split(' ')[1]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{event.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>);

}
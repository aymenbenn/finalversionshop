import React, { useState, Component } from 'react';
import { BubbleDecor } from '../components/BubbleDecor';
import { MapPin, Phone, Navigation, Search } from 'lucide-react';
interface Store {
  name: string;
  address: string;
  city: string;
  plz: string;
  phone: string;
}
const stores: Store[] = [
{
  name: "GetränkeLAND Herrmann's Dresden",
  address: 'Wernerstr. 35',
  plz: '01159',
  city: 'Dresden',
  phone: '0351 4241493'
},
{
  name: 'GetränkeLAND Dresden',
  address: 'Glashütter Str. 89',
  plz: '01277',
  city: 'Dresden',
  phone: '0351 3105548'
},
{
  name: "GetränkeLAND Herrmann's Dresden",
  address: 'Holbeinstr. 86',
  plz: '01309',
  city: 'Dresden',
  phone: '0351 3118604'
},
{
  name: 'GetränkeLAND Sabel',
  address: 'Pillnitzer Str. 11',
  plz: '01328',
  city: 'Dresden/OT.Weißig',
  phone: '0351 2164375'
},
{
  name: 'GetränkeLAND Arnold',
  address: 'Neucoswiger Str. 1',
  plz: '01640',
  city: 'Coswig',
  phone: '03523 67279'
},
{
  name: "GetränkeLAND Herrmann's Freital",
  address: 'Hauptstr. 1b',
  plz: '01705',
  city: 'Freital',
  phone: '0351 6491168'
},
{
  name: "GetränkeLAND Herrmann's Freital",
  address: 'An der Spinnerei',
  plz: '01705',
  city: 'Freital',
  phone: '0351 6418322'
},
{
  name: "GetränkeLAND Herrmann's Dippoldiswalde",
  address: 'Reichstädter Str. 8',
  plz: '01744',
  city: 'Dippoldiswalde',
  phone: '03504 629847'
},
{
  name: "GetränkeLAND Herrmann's Pirna",
  address: 'Eichendorfstr. 1',
  plz: '01796',
  city: 'Pirna-Copitz',
  phone: '03501 585266'
},
{
  name: 'GetränkeLAND Bad Gottleuba',
  address: 'Giesenstein 1b',
  plz: '01816',
  city: 'Bad Gottleuba',
  phone: '035023 60156'
},
{
  name: 'GetränkeLAND Neustadt',
  address: 'Wilhelm-Kaulisch-Str. 25',
  plz: '01844',
  city: 'Neustadt',
  phone: '03596 509339'
},
{
  name: 'GetränkeLAND Sebnitz',
  address: 'Hohnsteiner Str. 3a',
  plz: '01855',
  city: 'Sebnitz',
  phone: '035971 802913'
},
{
  name: 'GetränkeLAND Putzkau',
  address: 'Neustädter Str. 4a',
  plz: '01877',
  city: 'Putzkau',
  phone: '03594 704179'
},
{
  name: 'GetränkeLAND Krahl',
  address: 'Cisinski-Str. 1',
  plz: '01920',
  city: 'Panschwitz-Kuckau',
  phone: '035796 889685'
},
{
  name: 'GetränkeLAND & Weindepot Kühne',
  address: 'Pulsnitztalstr. 49',
  plz: '01920',
  city: 'Haselbachtal/OT.Reichenbach',
  phone: '035795 42855'
},
{
  name: 'GetränkeLAND Senftenberg',
  address: 'Charlottenstr.',
  plz: '01968',
  city: 'Senftenberg',
  phone: '03573 8109570'
},
{
  name: 'GetränkeLAND Hosena',
  address: 'Parkstraße',
  plz: '01996',
  city: 'Senftenberg/OT.Hosena',
  phone: '035756 60367'
},
{
  name: 'GetränkeLAND & Weindepot Stasch',
  address: 'Dresdner Str. 49',
  plz: '02625',
  city: 'Bautzen',
  phone: '03591 525996'
},
{
  name: 'GetränkeLAND Bautzen Großmarkt',
  address: 'Wilthener Str. 47',
  plz: '02625',
  city: 'Bautzen',
  phone: '03591 272190'
},
{
  name: 'GetränkeLAND Bautzen',
  address: 'Neusalzaer Str.37',
  plz: '02626',
  city: 'Bautzen',
  phone: '03591 270021'
},
{
  name: 'GetränkeLAND Wilthen',
  address: 'Dresdner Str. 47',
  plz: '02681',
  city: 'Wilthen',
  phone: '03592 32110'
},
{
  name: 'GetränkeLAND Schirgiswalde',
  address: 'Bautzener Str. 43',
  plz: '02681',
  city: 'Schirgiswalde',
  phone: '03592 5439832'
},
{
  name: 'GetränkeLAND Großpostwitz',
  address: 'Bautzener Str. 1',
  plz: '02692',
  city: 'Großpostwitz',
  phone: '035938 52099'
},
{
  name: 'GetränkeLAND Niedergurig',
  address: 'Muskauer Str. 39',
  plz: '02694',
  city: 'Malschwitz',
  phone: '035951 2793790'
},
{
  name: 'GetränkeLAND Obercunnerdorf',
  address: 'Mittelweg 5',
  plz: '02705',
  city: 'Obercunnersdorf',
  phone: '035875 67470'
},
{
  name: 'GetränkeLAND Schulze',
  address: 'Niedere Hauptstr. 53',
  plz: '02708',
  city: 'Niedercunnersdorf',
  phone: '035875 60232'
},
{
  name: 'GetränkeLAND Löbau',
  address: 'Breitscheidstr. 2',
  plz: '02708',
  city: 'Löbau',
  phone: '03585 860214'
},
{
  name: 'GetränkeLAND Neugersdorf',
  address: 'Karl-Liebknecht-Str. 1',
  plz: '02727',
  city: 'Neugersdorf',
  phone: '03586 369542'
},
{
  name: 'GetränkeLAND OEZ Schöne',
  address: 'Hauptstraße 3',
  plz: '02733',
  city: 'Cunewalde',
  phone: '0160 92741266'
},
{
  name: 'GetränkeLAND Oppach',
  address: 'Bautzener Str. 7',
  plz: '02736',
  city: 'Oppach',
  phone: '035872 32537'
},
{
  name: 'GetränkeLAND Oberoderwitz',
  address: 'Kretschamweg 2a',
  plz: '02744',
  city: 'Oberoderwitz',
  phone: '035842 25333'
},
{
  name: 'GetränkeLAND Zittau/Pethau',
  address: 'Hauptstr. 23 d',
  plz: '02763',
  city: 'Zittau/Pethau',
  phone: '03583 791313'
},
{
  name: 'GetränkeLAND Arlt Großschönau',
  address: 'Hauptstr. 111',
  plz: '02779',
  city: 'Großschönau',
  phone: '035841 2520'
},
{
  name: 'GetränkeLAND Arlt Großschönau',
  address: 'Bahnhofstr. 17a',
  plz: '02779',
  city: 'Großschönau',
  phone: '0160 2008716'
},
{
  name: 'GetränkeLAND Seifhennersdorf',
  address: 'An der Scheibe 5',
  plz: '02782',
  city: 'Seifhennersdorf',
  phone: '03586 406500'
},
{
  name: 'GetränkeLAND Görlitz',
  address: 'Rauschwalder-Str. 42-45',
  plz: '02826',
  city: 'Görlitz',
  phone: '03581 305094'
},
{
  name: 'GetränkeLAND Rauschwalde',
  address: 'Reichenbacher Straße 53/55',
  plz: '02827',
  city: 'Görlitz',
  phone: '03581 750487'
},
{
  name: 'GetränkeLAND Weinhübel',
  address: 'Zittauer Straße 144',
  plz: '02827',
  city: 'Görlitz',
  phone: '03581 851801'
},
{
  name: 'GetränkeLAND Ludwigsdorf',
  address: 'Rothenburger Landstr. 1a',
  plz: '02828',
  city: 'Ludwigsdorf',
  phone: '03581 765678'
},
{
  name: 'GetränkeLAND Reichenbach',
  address: 'Löbauer Straße 25',
  plz: '02894',
  city: 'Reichenbach',
  phone: '035828 88778'
},
{
  name: 'GetränkeLAND Kiesdorf',
  address: 'Obere Str. 106',
  plz: '02899',
  city: 'Kiesdorf',
  phone: '035823 71916'
},
{
  name: 'GetränkeLAND Schwarzkollm',
  address: 'Sandwäsche 2',
  plz: '02977',
  city: 'Schwarzkollm',
  phone: '035722 24684'
},
{
  name: 'GetränkeLAND Schwarze Pumpe',
  address: 'Bergmannstr. 7',
  plz: '03130',
  city: 'Schwarze Pumpe',
  phone: '03564 3189283'
},
{
  name: 'GetränkeLAND Guben',
  address: 'Cottbuser Str. 50',
  plz: '03172',
  city: 'Guben',
  phone: '03561 3262'
},
{
  name: 'GetränkeLAND Finsterwalde',
  address: 'Am Holländer 4',
  plz: '03238',
  city: 'Massen',
  phone: '03531 609171'
},
{
  name: 'GetränkeLAND Müller',
  address: 'Waldstraße 5',
  plz: '04928',
  city: 'Plessa',
  phone: '03533 5349'
}];

const cities = [
'Alle',
'Bad Gottleuba',
'Bautzen',
'Coswig',
'Cunewalde',
'Dippoldiswalde',
'Dresden',
'Freital',
'Großpostwitz',
'Großschönau',
'Guben',
'Görlitz',
'Haselbachtal',
'Kiesdorf',
'Ludwigsdorf',
'Löbau',
'Malschwitz',
'Massen',
'Neugersdorf',
'Neustadt',
'Niedercunnersdorf',
'Obercunnersdorf',
'Oberoderwitz',
'Oppach',
'Panschwitz-Kuckau',
'Pirna-Copitz',
'Plessa',
'Putzkau',
'Reichenbach',
'Schirgiswalde',
'Schwarze Pumpe',
'Schwarzkollm',
'Sebnitz',
'Seifhennersdorf',
'Senftenberg',
'Wilthen',
'Zittau'];

export function MarktfinderPage() {
  const [selectedCity, setSelectedCity] = useState('Alle');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredStores = stores.filter((store) => {
    const matchesCity =
    selectedCity === 'Alle' ||
    store.city.toLowerCase().includes(selectedCity.toLowerCase()) ||
    selectedCity === 'Dresden' && store.city.includes('Dresden'); // Handle OT cases if needed
    const matchesSearch =
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.plz.includes(searchQuery);
    return matchesCity && matchesSearch;
  });
  return (
    <main className="flex-grow bg-[#FFFBF5]">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16 overflow-hidden">
        <BubbleDecor variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Marktfinder
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Finden Sie schnell und einfach einen GetränkeLAND Markt in Ihrer
            Nähe.
          </p>

          {/* Search Input for Mobile/Desktop */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-xl leading-5 bg-white text-navy-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-white/50 sm:text-sm shadow-lg"
              placeholder="PLZ, Ort oder Markt suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />

          </div>
        </div>
      </section>

      {/* Sticky City Filter Bar */}
      <div className="sticky top-[64px] z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {cities.map((city) =>
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${selectedCity === city ? 'bg-orange-500 text-white shadow-md transform scale-105' : 'bg-white border border-gray-200 text-navy-900 hover:border-orange-400 hover:text-orange-600'}`}>

                {city}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Count */}
        <div className="mb-8">
          <h2 className="text-xl font-heading font-bold text-navy-900 mb-2">
            {filteredStores.length} Filialen gefunden
          </h2>
          <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
        </div>

        {/* Store Grid */}
        {filteredStores.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store, idx) =>
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 group flex flex-col">

                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-navy-900 text-lg leading-tight group-hover:text-orange-600 transition-colors">
                    {store.name}
                  </h3>
                  <div className="bg-orange-50 p-2 rounded-full text-orange-500 flex-shrink-0 ml-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                  <div className="text-gray-600">
                    <p>{store.address}</p>
                    <p>
                      {store.plz} {store.city}
                    </p>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-orange-400" />
                    <a
                  href={`tel:${store.phone}`}
                  className="hover:text-orange-600 transition-colors">

                      {store.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                  <span className="bg-green-100 text-green-700 font-bold text-xs px-3 py-1 rounded-full flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
                    Geöffnet
                  </span>

                  <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.name} ${store.address} ${store.plz} ${store.city}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white font-bold px-4 py-2 rounded-xl text-sm hover:bg-orange-600 transition-colors flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5">

                    <Navigation className="w-4 h-4 mr-1.5" />
                    Route
                  </a>
                </div>
              </div>
          )}
          </div> :

        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              Keine Filialen gefunden
            </h3>
            <p className="text-gray-500">
              Bitte versuchen Sie eine andere Suche oder wählen Sie "Alle" im
              Filter.
            </p>
            <button
            onClick={() => {
              setSelectedCity('Alle');
              setSearchQuery('');
            }}
            className="mt-6 text-orange-600 font-bold hover:underline">

              Filter zurücksetzen
            </button>
          </div>
        }
      </div>
    </main>);

}
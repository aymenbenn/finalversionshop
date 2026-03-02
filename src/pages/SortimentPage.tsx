import React from 'react';
import { Info, FileText, BookOpen, Building } from 'lucide-react';
import { AnimatedBubbles } from '../components/AnimatedBubbles';
export function SortimentPage() {
  const categories = [
  {
    title: 'Wasser',
    gradient: 'from-blue-400 to-cyan-500',
    count: '5 Kategorien',
    items: [
    'Mineralwasser',
    'Heilwasser',
    'Tafelwasser',
    'Aromatisiertes Wasser',
    'Babywasser']

  },
  {
    title: 'Bier',
    gradient: 'from-amber-500 to-yellow-600',
    count: '6 Kategorien',
    items: [
    'Pils',
    'Weizen',
    'Helles',
    'Schwarzbier',
    'Alkoholfreies Bier',
    'Craft Beer']

  },
  {
    title: 'Limonade & Cola',
    gradient: 'from-red-400 to-orange-500',
    count: '5 Kategorien',
    items: [
    'Cola & Cola-Mix',
    'Orangenlimonade',
    'Zitronenlimonade',
    'Fassbrause',
    'Energy Drinks']

  },
  {
    title: 'Wein & Sekt',
    gradient: 'from-purple-500 to-rose-500',
    count: '5 Kategorien',
    items: ['Rotwein', 'Weißwein', 'Rosé', 'Sekt & Prosecco', 'Glühwein']
  },
  {
    title: 'Fruchthaltige Getränke',
    gradient: 'from-green-400 to-emerald-500',
    count: '5 Kategorien',
    items: [
    'Apfelsaft',
    'Orangensaft',
    'Multivitamin',
    'Gemüsesäfte',
    'Bio-Säfte']

  },
  {
    title: 'Spirituosen',
    gradient: 'from-slate-600 to-slate-800',
    count: '6 Kategorien',
    items: ['Whisky', 'Gin', 'Wodka', 'Rum', 'Liköre', 'Kräuterschnaps']
  }];

  return (
    <div className="w-full pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unser Sortiment
          </h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Vielfalt ist unsere Stärke. In unseren Märkten finden Sie eine
            riesige Auswahl an Getränken für jeden Geschmack und Anlass.
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button className="py-4 px-2 border-b-2 border-orange-600 text-orange-600 font-bold flex items-center whitespace-nowrap">
              <FileText className="w-4 h-4 mr-2" />
              Informationen
            </button>
            <button className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-orange-600 font-medium flex items-center whitespace-nowrap transition-colors">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog
            </button>
            <button className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-orange-600 font-medium flex items-center whitespace-nowrap transition-colors">
              <Building className="w-4 h-4 mr-2" />
              Firmenverzeichnis
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category) =>
          <div
            key={category.title}
            className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">

              <div
              className={`h-32 bg-gradient-to-br ${category.gradient} flex flex-col justify-center px-6 text-white`}>

                <h2 className="text-2xl font-bold mb-1">{category.title}</h2>
                <span className="text-sm opacity-90 font-medium">
                  {category.count}
                </span>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {category.items.map((item, idx) =>
                <li key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                )}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="bg-[#1E3A5F] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-600 rounded-full opacity-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-orange-600 rounded-full opacity-20 blur-2xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <Info className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Nicht das Richtige gefunden?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Unser Sortiment variiert je nach Standort und Saison. Sprechen Sie
              unsere Mitarbeiter vor Ort an – wir bestellen gerne spezielle
              Wünsche für Sie!
            </p>
            <p className="text-sm text-gray-400 italic">
              * Hinweis: Die Verfügbarkeit einzelner Produkte kann je nach
              Filiale variieren.
            </p>
          </div>
        </div>
      </div>
    </div>);

}
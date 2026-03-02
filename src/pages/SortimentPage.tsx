import React, { useState } from 'react';
import { BubbleDecor } from '../components/BubbleDecor';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
interface CategoryProps {
  title: string;
  icon: string;
  items: string[];
  color: string;
}
function CategoryCard({ title, icon, items, color }: CategoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
      <div
        className={`p-6 cursor-pointer flex items-center justify-between bg-gradient-to-r ${color} bg-opacity-10`}
        onClick={() => setIsOpen(!isOpen)}>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-navy-900">{title}</h3>
        </div>
        <div className="text-navy-900 bg-white/50 p-2 rounded-full">
          {isOpen ?
          <ChevronUp className="w-5 h-5" /> :

          <ChevronDown className="w-5 h-5" />
          }
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>

        <div className="p-6 bg-white border-t border-gray-50">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item, idx) =>
            <li key={idx} className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                {item}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>);

}
export function SortimentPage() {
  const categories = [
  {
    title: 'Wasser',
    icon: '💧',
    color: 'from-blue-50 to-cyan-50',
    items: [
    'Mineralwasser',
    'Heilwasser',
    'Tafelwasser',
    'Aromatisiertes Wasser',
    'Babywasser']

  },
  {
    title: 'Bier',
    icon: '🍺',
    color: 'from-amber-50 to-orange-50',
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
    icon: '🥤',
    color: 'from-yellow-50 to-orange-50',
    items: [
    'Cola & Cola-Mix',
    'Orangenlimonade',
    'Zitronenlimonade',
    'Fassbrause',
    'Energy Drinks']

  },
  {
    title: 'Wein & Sekt',
    icon: '🍷',
    color: 'from-red-50 to-pink-50',
    items: ['Rotwein', 'Weißwein', 'Rosé', 'Sekt & Prosecco', 'Glühwein']
  },
  {
    title: 'Fruchthaltige Getränke',
    icon: '🍊',
    color: 'from-orange-50 to-red-50',
    items: [
    'Apfelsaft',
    'Orangensaft',
    'Multivitamin',
    'Gemüsesäfte',
    'Bio-Säfte']

  },
  {
    title: 'Spirituosen',
    icon: '🥃',
    color: 'from-amber-50 to-yellow-50',
    items: ['Whisky', 'Gin', 'Wodka', 'Rum', 'Liköre', 'Kräuterschnaps']
  }];

  return (
    <main className="flex-grow bg-[#FFFBF5]">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16 overflow-hidden">
        <BubbleDecor variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Unser Sortiment
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Vielfalt ist unsere Stärke. In unseren Märkten finden Sie eine
            riesige Auswahl an Getränken für jeden Geschmack und Anlass.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {categories.map((cat, idx) =>
          <CategoryCard key={idx} {...cat} />
          )}
        </div>

        {/* Info Box */}
        <div className="bg-navy-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <BubbleDecor variant="light" className="opacity-10" />
          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            <div className="bg-white/10 p-4 rounded-full">
              <Info className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Nicht das Richtige gefunden?
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Unser Sortiment variiert je nach Standort und Saison. Sprechen
                Sie unsere Mitarbeiter vor Ort an – wir bestellen gerne
                spezielle Wünsche für Sie!
              </p>
              <p className="text-sm text-gray-400 italic">
                * Hinweis: Die Verfügbarkeit einzelner Produkte kann je nach
                Filiale variieren.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>);

}
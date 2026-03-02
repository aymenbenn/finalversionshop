import React from 'react';
import { BubbleDecor } from '../components/BubbleDecor';
import { ShoppingCart, Clock, ArrowRight } from 'lucide-react';
export function AngebotePage() {
  return (
    <main className="flex-grow bg-[#FFFBF5]">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-16 overflow-hidden">
        <BubbleDecor variant="light" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Aktuelle Angebote
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Entdecken Sie unsere wöchentlichen Highlights und sparen Sie bei
            Ihrem nächsten Einkauf.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Deal */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-navy-900 p-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-blue-900"></div>
              <BubbleDecor variant="light" className="opacity-30" />
              <img
                src="/Group_1_(1).png"
                alt="Corona Extra Deal"
                className="relative z-10 w-full max-w-md h-auto object-contain transform hover:scale-105 transition-transform duration-500" />

            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  Top Deal der Woche
                </span>
                <span className="flex items-center text-gray-500 text-sm font-medium">
                  <Clock className="w-4 h-4 mr-1" />
                  Gültig bis Samstag
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 mb-4">
                Sommer-Aktion: Corona Extra
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Beim Kauf von einem Kasten Corona Extra erhalten Sie ein
                exklusives Strandtuch GRATIS dazu! Perfekt für den nächsten
                Strandtag oder das Picknick im Park.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-orange-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-orange-700 transition-colors shadow-lg flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Jetzt im Markt finden
                </button>
                <button className="flex-1 border-2 border-navy-900 text-navy-900 font-bold py-3 px-6 rounded-xl hover:bg-navy-50 transition-colors flex items-center justify-center">
                  Prospekt (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Deals Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-900">
              Weitere Highlights
            </h2>
            <a
              href="#"
              className="text-orange-600 font-bold hover:text-orange-700 flex items-center">

              Alle Angebote <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              name: 'Radeberger Pilsner',
              desc: '20 x 0,5l Kasten + Pfand',
              oldPrice: '13.99 €',
              price: '10.99 €',
              discount: '-20%',
              color: 'bg-yellow-100',
              emoji: '🍺'
            },
            {
              name: 'Coca-Cola Kiste',
              desc: '12 x 1,0l PET + Pfand',
              oldPrice: '12.49 €',
              price: '9.99 €',
              discount: '-15%',
              color: 'bg-red-100',
              emoji: '🥤'
            },
            {
              name: 'Rotkäppchen Sekt',
              desc: '0,75l Flasche',
              oldPrice: '3.99 €',
              price: '2.99 €',
              discount: '-25%',
              color: 'bg-pink-100',
              emoji: '🍾'
            }].
            map((product, idx) =>
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group hover:shadow-xl transition-all duration-300">

                <div
                className={`h-48 ${product.color} flex items-center justify-center relative overflow-hidden`}>

                  <div className="absolute top-4 left-4 bg-red-500 text-white font-bold px-3 py-1 rounded-lg shadow-md z-10">
                    {product.discount}
                  </div>
                  <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                    {product.emoji}
                  </div>
                  <BubbleDecor variant="light" className="opacity-20" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">{product.desc}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-gray-400 line-through text-sm block">
                        Statt {product.oldPrice}
                      </span>
                      <span className="text-3xl font-heading font-black text-orange-600">
                        {product.price}
                      </span>
                    </div>
                    <button className="bg-navy-900 text-white p-2 rounded-lg hover:bg-orange-600 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>);

}
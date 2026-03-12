import React from "react";
import { motion } from "framer-motion";

export const RecipesPage: React.FC = () => {
  const topCards = [
    {
      title: 'Erfrischendes Zitronenwasser',
      description: 'Perfekt für heiße Sommertage – einfach, gesund und lecker.',
      img: '/zitronenwasser.png',
      text: `Erfrischendes Zitronenwasser gehört zu den beliebtesten und
      einfachsten Getränken für heiße Sommertage. Es kombiniert frisches
      Wasser mit Zitronen und sorgt für eine natürliche Erfrischung.
      Viele Menschen trinken Zitronenwasser morgens, da es leicht,
      erfrischend und angenehm im Geschmack ist.`,
    },
    {
      title: 'Hausgemachte Limonade',
      description: 'Mit frischen Früchten – ein Genuss für Groß & Klein.',
      img: '/hausgemachte_limonade.png',
      text: `Hausgemachte Limonade ist ein Klassiker unter den
      Sommergetränken. Sie kombiniert frische Früchte, Wasser und
      natürliche Süße zu einem erfrischenden Getränk.`,
    },
    {
      title: 'Fruchtige Smoothies',
      description: 'Vitaminreich & erfrischend – ideal für Energie.',
      img: '/fruchtige_smoothies.png',
      text: `Fruchtige Smoothies sind eine perfekte Kombination aus
      Geschmack und Nährstoffen. Sie werden aus frischen Früchten
      zubereitet und liefern viele Vitamine.`,
    },
    {
      title: 'Gin-Cocktail Ideen',
      description: 'Perfekt für besondere Anlässe.',
      img: '/gin_cocktail.png',
      text: `Gin-Cocktails gehören zu den beliebtesten modernen
      Getränken. Mit verschiedenen Früchten, Kräutern und Tonic
      entstehen kreative Cocktailvariationen.`,
    },
  ]
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="text-center py-16 bg-orange-500 text-white">
        <h1 className="text-4xl font-bold mb-4">Getränke Rezepte entdecken</h1>
        <p className="max-w-2xl mx-auto">
          Entdecken Sie erfrischende Getränkeideen und kreative Rezepte für jede
          Gelegenheit.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {topCards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -10,
            }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-orange-500 mb-2">
                {card.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3">{card.description}</p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

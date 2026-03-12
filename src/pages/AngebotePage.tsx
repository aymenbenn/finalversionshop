import React from "react";
import { InfoIcon, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBubbles } from "../components/AnimatedBubbles";

export function AngebotePage() {
  const topDeal = {
    name: "Frische-Aktion: Regionales Gemüse",
    desc: "Beim Kauf von regionalem Gemüse ab 15€ erhalten Sie eine praktische Baumwolltasche GRATIS dazu! Perfekt für Ihren nächsten Einkauf.",
    img: "/promo.png",
    validity: "Gültig bis Samstag",
    badge: "Top Deal der Woche",
  };

  const productCategories = [
    {
      title: "Wasser",
      subtitle: "5 Kategorien",
      items: ["Mineralwasser", "Heilwasser", "Tafelwasser", "Aromatisiertes Wasser", "Babywasser"],
      img: "/wasser.png",
    },
    {
      title: "Bier",
      subtitle: "6 Kategorien",
      items: ["Pils", "Weizen", "Helles", "Schwarzbier", "Alkoholfreies Bier", "Craft Beer"],
      img: "/beer.png",
    },
    {
      title: "Limonade & Cola",
      subtitle: "5 Kategorien",
      items: ["Cola & Cola-Mix", "Orangenlimonade", "Zitronenlimonade", "Fassbrause", "Energy Drinks"],
      img: "/limonaden.jpg",
    },
    {
      title: "Wein & Sekt",
      subtitle: "5 Kategorien",
      items: ["Rotwein", "Weißwein", "Rosé", "Sekt & Prosecco", "Glühwein"],
      img: "/wein.jpg",
    },
    {
      title: "Fruchthaltige Getränke",
      subtitle: "5 Kategorien",
      items: ["Apfelsaft", "Orangensaft", "Multivitamin", "Gemüsesäfte", "Bio-Säfte"],
      img: "/fruchtsaft.jpeg",
    },
    {
      title: "Spirituosen",
      subtitle: "6 Kategorien",
      items: ["Whisky", "Gin", "Wodka", "Rum", "Liköre", "Kräuterschnaps"],
      img: "/spirituosen.jpg",
    },
  ];

  const buttonStyle =
    "mt-4 inline-flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors";

  return (
    <main className="flex-grow bg-[#FFFBF5]">

      {/* HERO BANNER */}
     <section className="relative bg-gradient-to-br from-[#FF7F50] via-orange-600 to-orange-500 text-white py-20 overflow-hidden">
  {/* Animated bubbles on top */}
  <AnimatedBubbles />

  {/* Text content */}
  <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Aktuelle Angebote
    </h1>
    <p className="text-lg md:text-xl text-white/90">
      Entdecken Sie unsere wöchentlichen Highlights und sparen Sie bei Ihrem nächsten Einkauf.
    </p>
  </div>

  {/* Banner image placeholder */}
  <div className="mt-12 max-w-5xl mx-auto">
    <img
      src="/banner-2.png" // replace with your image
      alt="Banner"
      className="w-full h-auto rounded-2xl shadow-lg object-cover"
    />
  </div>
</section>

      {/* PROSPEKT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Smaller PDF preview */}
            <img
              src="/pdf.png"
              alt="Prospekt Vorschau"
              className="rounded-2xl w-3/4 md:w-full object-contain mx-auto shadow-md"
            />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Aktueller Prospekt</h2>
              <p className="text-gray-500">Gültig bis 15.08.</p>
              <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                Prospekt Vorschau
              </span>
              <p className="text-gray-700">Wochenangebote entdecken</p>
              <p className="text-gray-600">
                Gültig von Montag, 09.08. bis Samstag, 15.08.
                <br />
                Blättern Sie durch unseren aktuellen Prospekt und entdecken Sie alle Angebote bequem von zu Hause aus.
              </p>
              <button className={buttonStyle}>Prospekt herunterladen (PDF)</button>
            </div>

          </div>
        </div>
      </section>

      {/* TOP DEAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src={topDeal.img}
            alt="Top Deal"
            className="rounded-2xl w-full md:w-1/2 object-cover shadow-md"
          />
          <div className="flex-1 space-y-4">
            <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">{topDeal.badge}</span>
            <p className="text-gray-500 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {topDeal.validity}
            </p>
            <h3 className="text-3xl font-bold text-gray-900">{topDeal.name}</h3>
            <p className="text-gray-700">{topDeal.desc}</p>
            <Link to="/marktfinder" className={buttonStyle}>Jetzt im Markt finden</Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productCategories.map((cat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-48 relative overflow-hidden">
              <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{cat.title}</h3>
                <span className="text-sm opacity-90 font-medium">{cat.subtitle}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <ul className="space-y-2 text-gray-700 mb-6">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/blog"
                className="mt-auto inline-flex items-center justify-center bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
              >
                Produkt ansehen
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* FINAL INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
       <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
     
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Nicht das Richtige gefunden?</h3>
          <p className="text-lg text-orange-50 mb-8">
            Unser Sortiment variiert je nach Standort und Saison. Sprechen Sie unsere Mitarbeiter vor Ort an – wir bestellen gerne spezielle Wünsche für Sie!
          </p>
          <p className="text-sm text-orange-200 italic mb-4">
            * Hinweis: Die Verfügbarkeit einzelner Produkte kann je nach Filiale variieren.
          </p>
          <Link
            to="/marktfinder"
            className="inline-flex items-center justify-center bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Zum Marktfinder
          </Link>
        </div>
      </section>
    </main>
  );
}
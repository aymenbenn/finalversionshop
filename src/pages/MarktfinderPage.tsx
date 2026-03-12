import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPinIcon,
  PhoneIcon,
  NavigationIcon,
  ClockIcon,
  ArrowRightIcon } from
"lucide-react";

import { AnimatedBubbles } from "../components/AnimatedBubbles";

/* ---------------- STORES DATA ---------------- */

export const rawStores = [
"GetränkeLAND Herrmann's Dresden, Wernerstr. 35, 01159 Dresden, 0351 4241493",
"GetränkeLAND Dresden, Glashütter Str. 89, 01277 Dresden, 0351 3105548",
"GetränkeLAND Herrmann's Dresden, Holbeinstr. 86, 01309 Dresden, 0351 3118604",
"GetränkeLAND Sabel, Pillnitzer Str. 11, 01328 Dresden/OT.Weißig, 0351 2164375",
"GetränkeLAND Arnold, Neucoswiger Str. 1, 01640 Coswig, 03523 67279",
"GetränkeLAND Herrmann's Freital, Hauptstr. 1b, 01705 Freital, 0351 6491168",
"GetränkeLAND Herrmann's Freital, An der Spinnerei, 01705 Freital, 0351 6418322",
"GetränkeLAND Herrmann's Dippoldiswalde, Reichstädter Str. 8, 01744 Dippoldiswalde, 03504 629847",
"GetränkeLAND Herrmann's Pirna, Eichendorfstr. 1, 01796 Pirna-Copitz, 03501 585266",
"GetränkeLAND Bad Gottleuba, Giesenstein 1b, 01816 Bad Gottleuba, 035023 60156",
"GetränkeLAND Neustadt, Wilhelm-Kaulisch-Str. 25, 01844 Neustadt, 03596 509339",
"GetränkeLAND Sebnitz, Hohnsteiner Str. 3a, 01855 Sebnitz, 035971 802913",
"GetränkeLAND Putzkau, Neustädter Str. 4a, 01877 Putzkau, 03594 704179",
"GetränkeLAND Krahl, Cisinski-Str. 1, 01920 Panschwitz-Kuckau, 035796 889685",
"GetränkeLAND & Weindepot Kühne, Pulsnitztalstr. 49, 01920 Haselbachtal/OT.Reichenbach, 035795 42855",
"GetränkeLAND Senftenberg, Charlottenstr., 01968 Senftenberg, 03573 8109570",
"GetränkeLAND Hosena, Parkstraße, 01996 Senftenberg/OT.Hosena, 035756 60367",
"GetränkeLAND & Weindepot Stasch, Dresdner Str. 49, 02625 Bautzen, 03591 525996",
"GetränkeLAND Bautzen Großmarkt, Wilthener Str. 47, 02625 Bautzen, 03591 272190",
"GetränkeLAND Bautzen, Neusalzaer Str.37, 02626 Bautzen, 03591 270021",
"GetränkeLAND Wilthen, Dresdner Str. 47, 02681 Wilthen, 03592 32110",
"GetränkeLAND Schirgiswalde, Bautzener Str. 43, 02681 Schirgiswalde, 03592 5439832",
"GetränkeLAND Großpostwitz, Bautzener Str. 1, 02692 Großpostwitz, 035938 52099",
"GetränkeLAND Niedergurig, Muskauer Str. 39, 02694 Malschwitz, 035951 2793790",
"GetränkeLAND Obercunnerdorf, Mittelweg 5, 02705 Obercunnersdorf, 035875 67470",
"GetränkeLAND Schulze, Niedere Hauptstr. 53, 02708 Niedercunnersdorf, 035875 60232",
"GetränkeLAND Löbau, Breitscheidstr. 2, 02708 Löbau, 03585 860214",
"GetränkeLAND Neugersdorf, Karl-Liebknecht-Str. 1, 02727 Neugersdorf, 03586 369542",
"GetränkeLAND OEZ Schöne, Hauptstraße 3, 02733 Cunewalde, 0160 92741266",
"GetränkeLAND Oppach, Bautzener Str. 7, 02736 Oppach, 035872 32537",
"GetränkeLAND Oberoderwitz, Kretschamweg 2a, 02744 Oberoderwitz, 035842 25333",
"GetränkeLAND Zittau/Pethau, Hauptstr. 23 d, 02763 Zittau/Pethau, 03583 791313",
"GetränkeLAND Arlt Großschönau, Hauptstr. 111, 02779 Großschönau, 035841 2520",
"GetränkeLAND Arlt Großschönau, Bahnhofstr. 17a, 02779 Großschönau, 0160 2008716",
"GetränkeLAND Seifhennersdorf, An der Scheibe 5, 02782 Seifhennersdorf, 03586 406500",
"GetränkeLAND Görlitz, Rauschwalder-Str. 42-45, 02826 Görlitz, 03581 305094",
"GetränkeLAND Rauschwalde, Reichenbacher Straße 53/55, 02827 Görlitz, 03581 750487",
"GetränkeLAND Weinhübel, Zittauer Straße 144, 02827 Görlitz, 03581 851801",
"GetränkeLAND Ludwigsdorf, Rothenburger Landstr. 1a, 02828 Ludwigsdorf, 03581 765678",
"GetränkeLAND Reichenbach, Löbauer Straße 25, 02894 Reichenbach, 035828 88778",
"GetränkeLAND Kiesdorf, Obere Str. 106, 02899 Kiesdorf, 035823 71916",
"GetränkeLAND Schwarzkollm, Sandwäsche 2, 02977 Schwarzkollm, 035722 24684",
"GetränkeLAND Schwarze Pumpe, Bergmannstr. 7, 03130 Schwarze Pumpe, 03564 3189283",
"GetränkeLAND Guben, Cottbuser Str. 50, 03172 Guben, 03561 3262",
"GetränkeLAND Finsterwalde, Am Holländer 4, 03238 Massen, 03531 609171",
"GetränkeLAND Müller, Waldstraße 5, 04928 Plessa, 03533 5349"];


const extractFilterCity = (zipCity) => {
  const parts = zipCity.split(" ");
  if (parts.length > 1) {
    return parts.slice(1).join(" ").split("/")[0];
  }
  return zipCity;
};

export const stores = rawStores.map((storeStr, index) => {
  const parts = storeStr.split(",").map((s) => s.trim());
  return {
    id: index.toString(),
    name: parts[0],
    address: parts[1],
    zipCity: parts[2],
    phone: parts[3],
    filterCity: extractFilterCity(parts[2])
  };
});

/* ---------------- PAGE ---------------- */
export function MarktfinderPage() {
  const [selectedCity, setSelectedCity] = useState("Alle");

  const filterCities = [
    "Alle",
    ...Array.from(new Set(stores.map((s) => s.filterCity)))
  ];

  const filteredStores = useMemo(() => {
    if (selectedCity === "Alle") return stores;
    return stores.filter(
      (store) =>
        store.filterCity === selectedCity || store.zipCity.includes(selectedCity)
    );
  }, [selectedCity]);

  return (
    <div className="w-full pb-20">

      {/* HEADER */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Marktfinder</h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Finden Sie schnell und einfach einen GetränkeLAND Markt in Ihrer Nähe.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 mt-8">

        {/* FILTER */}
        <div className="bg-white p-4 rounded-xl shadow-sm border mb-8">
          <div className="flex flex-wrap gap-2">
            {filterCities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCity === city
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 hover:bg-orange-100"
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* RESULT COUNT */}
        <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
          {filteredStores.length} Filialen gefunden
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <Link
              to={`/marktfinder/${store.id}`}
              key={store.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border flex flex-col"
            >

              {/* NAME + GEÖFFNET BADGE */}
              <div className="flex justify-between mb-4 items-center">
                <h3 className="font-bold text-lg text-[#1E3A5F]">{store.name}</h3>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded w-20 inline-block text-center">
                  Geöffnet
                </span>
              </div>

              {/* STORE INFO */}
              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 mr-3 text-orange-600" />
                  <div>
                    <p>{store.address}</p>
                    <p>{store.zipCity}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-3 text-orange-600" />
                  {store.phone}
                </div>

                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 mr-3 text-orange-600" />
                  <p className="text-sm">
                    Mo-Fr: 9:00-19:00
                    <br />
                    Sa: 9:00-14:00
                  </p>
                </div>
              </div>

              {/* LOGOS + NAV */}
              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex gap-2">
                  <img src="/lotto.JPG" alt="Lotto" className="h-6 w-auto" />
                  <img src="/post.JPG" alt="Post" className="h-6 w-auto" />
                  <img src="/dhl.JPG" alt="DHL" className="h-6 w-auto" />
                </div>
                <NavigationIcon className="w-5 h-5 text-orange-600" />
              </div>

            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
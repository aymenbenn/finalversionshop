import React, { useState } from "react"
import { motion } from "framer-motion"
import { FileTextIcon, BookOpenIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { productCategories } from "../data/productCategories"
import { AnimatedBubbles } from "../components/AnimatedBubbles"

export const SortimentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"info" | "recipes">("info")
  const navigate = useNavigate()

  return (
    <div className="w-full pb-20 relative">

      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Unser Sortiment
          </h1>

          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            Frische und Vielfalt für Ihren Alltag. Entdecken Sie unsere Produkte
            und Partnermarken.
          </p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-start">

            {[
              {
                key: "info",
                label: "Informationen",
                icon: FileTextIcon
              },
              {
                key: "recipes",
                label: "Rezepte und Trends",
                icon: BookOpenIcon
              }
            ].map((tab) => {

              const baseClasses =
                "flex-1 text-center py-4 border-b-2 font-bold flex items-center justify-center transition-colors"

              const activeClasses =
                activeTab === tab.key
                  ? "border-[#2d5a27] text-[#2d5a27]"
                  : "border-transparent text-gray-500 hover:text-orange-700"

              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    if (tab.key === "recipes") {
                      navigate("/recipes")
                    } else {
                      setActiveTab("info")
                    }
                  }}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              )
            })}

          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">

        {activeTab === "info" && (

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >

            {productCategories.map((cat) => (

              <motion.div
                key={cat.title}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col"
              >

                {/* Image */}
                {cat.img && (
                  <div className="h-48 relative overflow-hidden flex items-center justify-center">

                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h2 className="text-2xl font-bold mb-1">
                        {cat.title}
                      </h2>

                      <span className="text-sm opacity-90 font-medium">
                        {cat.subtitle}
                      </span>
                    </div>

                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">

                  <ul className="space-y-2 text-gray-700 mb-4 flex-grow">

                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}

                  </ul>

                  <button
                    onClick={() => navigate(`/sortiment/${cat.slug}`)}
                    className="mt-auto bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition-colors"
                  >
                    Produkt ansehen
                  </button>

                </div>

              </motion.div>

            ))}

          </motion.div>

        )}

      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeftIcon, BookOpenIcon, TagIcon } from 'lucide-react'
import { productCategories } from '../data/productCategories'
import { AnimatedBubbles } from '../components/AnimatedBubbles'
export function CategoryDetailPage() {
  const { categorySlug } = useParams()
  const category = productCategories.find((c) => c.slug === categorySlug)
  const [activeTab, setActiveTab] = useState<'description' | 'brands'>(
    'description',
  )
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-[#1E3A5F] mb-4">
          Kategorie nicht gefunden
        </h1>
        <Link
          to="/sortiment"
          className="text-orange-600 hover:underline flex items-center"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" /> Zurück zum Sortiment
        </Link>
      </div>
    )
  }
  return (
    <div className="w-full pb-20 bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 py-16 text-white text-center overflow-hidden">
        <AnimatedBubbles />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto px-4">
            {category.subtitle} – Entdecken Sie unser vielfältiges Angebot.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Back Button */}
        <Link
          to="/sortiment"
          className="inline-flex items-center px-4 py-2 bg-white text-orange-600 font-medium rounded-full shadow-md hover:bg-gray-50 transition-colors mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Zurück zum Sortiment
        </Link>

        {/* Category Image Placeholder */}
        <div className="w-full h-64 md:h-80 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-medium rounded-2xl shadow-md mb-8">
          Platzhalter: {category.title} Bild
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`flex-1 py-4 text-center font-bold flex items-center justify-center transition-colors border-b-2 ${activeTab === 'description' ? 'border-[#1E3A5F] text-[#1E3A5F]' : 'border-transparent text-gray-500 hover:text-orange-600'}`}
            >
              <BookOpenIcon className="w-4 h-4 mr-2" />
              {category.title}
            </button>
            <button
              onClick={() => setActiveTab('brands')}
              className={`flex-1 py-4 text-center font-bold flex items-center justify-center transition-colors border-b-2 ${activeTab === 'brands' ? 'border-[#1E3A5F] text-[#1E3A5F]' : 'border-transparent text-gray-500 hover:text-orange-600'}`}
            >
              <TagIcon className="w-4 h-4 mr-2" />
              Marken
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 md:p-10">
            {activeTab === 'description' && (
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-6">
                  {category.title}
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {category.blogText.split('\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Subcategories */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-4">
                    Kategorien
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 text-center font-medium text-gray-800"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'brands' && (
              <div>
                <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">
                  Marken
                </h2>
                <p className="text-gray-500 mb-6">
                  Hier finden Sie eine Übersicht aller Marken in der Kategorie{' '}
                  {category.title}.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {category.brands.map((brand, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-14 h-14 bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400 text-xs text-center">
                          Logo
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1E3A5F]">{brand}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// src/pages/BlogPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingContactBar } from '../components/ContactIconButtons';
import { productCategories } from '../data/productCategories';
import { AnimatedBubbles } from '../components/AnimatedBubbles';

export const BlogPage: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ title: string; description: string } | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Banner Section */}
      <section className="relative bg-orange-500 flex flex-col items-center justify-center py-16">
        <AnimatedBubbles />
        <img
          src="/recipebanner.png"
          alt="Recipe Banner"
          className="w-full max-w-4xl object-cover rounded-3xl shadow-lg"
        />
        <button
          onClick={() => navigate('/recipes')}
          className="mt-8 bg-white text-orange-500 font-bold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition-colors"
        >
          See Recipes
        </button>
      </section>

      {/* Main Blog Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-16 space-y-24 relative">
        <h1 className="text-5xl font-extrabold mb-16 text-center text-gray-900">Blog & Rezepte</h1>

        {productCategories.map((cat, index) => (
          <div
            key={cat.title}
            className={`flex flex-col md:flex-row items-center md:items-stretch rounded-3xl shadow-xl overflow-hidden border border-orange-100 hover:border-orange-400 transition-all duration-300 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } bg-white`}
          >
            {/* Image */}
            <div
              className="md:w-1/2 h-64 md:h-auto relative flex-shrink-0 cursor-pointer"
              onClick={() => setModalContent({ title: cat.title, description: cat.blogText })}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF7F50]/40 via-orange-400/20 to-transparent rounded-3xl"></div>
            </div>

            {/* Text */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center bg-orange-50">
              <h2 className="text-3xl font-bold text-[#FF7F50] mb-4">{cat.title}</h2>
              <span className="text-lg font-medium text-orange-600 mb-6">{cat.subtitle}</span>
              <p className="text-gray-800 whitespace-pre-line mb-6">{cat.blogText}</p>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item, i) => (
                  <li
                    key={i}
                    className="bg-[#FF7F50] text-white px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </main>

      {/* Modal */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setModalContent(null)}
        >
          <div
            className="bg-white p-6 rounded-2xl max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{modalContent.description}</p>
            <button
              className="mt-6 bg-[#FF7F50] text-white px-4 py-2 rounded hover:bg-orange-600"
              onClick={() => setModalContent(null)}
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      {/* Floating contact buttons */}
      <FloatingContactBar />
    </div>
  );
};
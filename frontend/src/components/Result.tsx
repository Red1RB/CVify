'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import goodResume from '../../assets/images/good_resume.png';
import badResume from '../../assets/images/bad_resume.png';

export function Result() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        See the CVify Difference
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          onClick={() => setSelectedImage(badResume)}
          className="relative bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300"
        >
          <span className="absolute top-4 left-4 bg-red-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
            Before CVify
          </span>
          <div className="relative w-full h-[500px] mt-10">
            <Image
              src={badResume}
              alt="Bad Resume Example"
              fill
              className="object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        <div
          onClick={() => setSelectedImage(goodResume)}
          className="relative bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl shadow-2xl p-6 cursor-pointer hover:-translate-y-2 transition-all duration-300"
        >
          <span className="absolute top-4 left-4 bg-emerald-500 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-md">
            After CVify
          </span>
          <div className="relative w-full h-[500px] mt-10">
            <Image
              src={goodResume}
              alt="Good Resume Example"
              fill
              className="object-contain rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <p className="text-center text-gray-300 mt-12 max-w-2xl mx-auto leading-relaxed">
        CVify refines your resume layout, highlights key strengths, and improves readability —
        giving you a polished, professional look that stands out to recruiters.
      </p>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer animate-fadeIn"
        >
          <div className="relative w-[90vw] md:w-[60vw] h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged Resume"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

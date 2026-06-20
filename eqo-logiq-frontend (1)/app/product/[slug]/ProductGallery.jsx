'use client';

import { useState } from 'react';
import Reveal from '../../../components/Reveal';

export default function ProductGallery({ images = [], productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const main = images[activeIndex] || images[0];

  if (!images.length) {
    return (
      <Reveal className="lg:w-1/2">
        <div className="bg-brand-surface rounded-2xl aspect-square overflow-hidden flex items-center justify-center">
          <span className="font-body text-sm text-brand-text/30">No image available</span>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="lg:w-1/2">
      <div className="bg-brand-surface rounded-2xl aspect-square overflow-hidden flex items-center justify-center mb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={main.src}
          alt={main.alt || productName}
          className="w-full h-full object-cover transition-all duration-300"
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-3 flex-wrap">
          {images.map((img, index) => (
            <button
              key={img.id || index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-24 h-24 bg-brand-surface rounded-xl overflow-hidden flex items-center justify-center cursor-pointer border-2 transition-[border-color,opacity] duration-200 ${
                activeIndex === index
                  ? 'border-brand-primary opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-75'
              }`}
              aria-label={`View image ${index + 1}`}
              aria-pressed={activeIndex === index}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.thumbnail || img.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </Reveal>
  );
}

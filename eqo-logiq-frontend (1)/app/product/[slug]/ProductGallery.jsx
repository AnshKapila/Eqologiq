'use client';

import { useEffect, useState } from 'react';
import Reveal from '../../../components/Reveal';
import { useVariation } from './VariationContext';

function GalleryImage({ src, alt, className, fallbackSrc }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => {
        if (fallbackSrc && currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}

export default function ProductGallery({ images = [], productName, fallbackSrc = '/images/steel-bottle.png' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [variationImage, setVariationImage] = useState(null);
  const { selectedVariation } = useVariation();

  // Follow the chosen variation. If its photo is already in the gallery, just
  // activate that thumbnail; otherwise show it as an override so the picture on
  // screen always matches what will go into the cart.
  useEffect(() => {
    const image = selectedVariation?.image;

    if (!image?.src) {
      setVariationImage(null);
      return;
    }

    const index = images.findIndex(
      (candidate) => (image.id && candidate?.id === image.id) || candidate?.src === image.src
    );

    if (index >= 0) {
      setActiveIndex(index);
      setVariationImage(null);
    } else {
      setVariationImage(image);
    }
  }, [images, selectedVariation]);

  const main = variationImage || images[activeIndex] || images[0];

  if (!main) {
    return (
      <Reveal className="lg:w-1/2">
        <div className="bg-brand-surface rounded-2xl aspect-square overflow-hidden flex items-center justify-center">
          <GalleryImage
            src={fallbackSrc}
            alt={productName}
            className="w-full h-full object-cover"
            fallbackSrc={fallbackSrc}
          />
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal className="lg:w-1/2">
      <div className="bg-brand-surface rounded-2xl aspect-square overflow-hidden flex items-center justify-center mb-4">
        <GalleryImage
          src={main.src}
          alt={main.alt || productName}
          className="w-full h-full object-cover transition-all duration-300"
          fallbackSrc={fallbackSrc}
        />
      </div>
      {images.length > 1 ? (
        <div className="flex gap-3 flex-wrap">
          {images.map((img, index) => (
            <button
              key={img.id || index}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setVariationImage(null);
              }}
              className={`w-24 h-24 bg-brand-surface rounded-xl overflow-hidden flex items-center justify-center cursor-pointer border-2 transition-[border-color,opacity] duration-200 ${
                activeIndex === index && !variationImage
                  ? 'border-brand-primary opacity-100'
                  : 'border-transparent opacity-50 hover:opacity-75'
              }`}
              aria-label={`View image ${index + 1}`}
              aria-pressed={activeIndex === index && !variationImage}
            >
              <GalleryImage
                src={img.thumbnail || img.src}
                alt=""
                className="w-full h-full object-cover"
                fallbackSrc={fallbackSrc}
              />
            </button>
          ))}
        </div>
      ) : null}
    </Reveal>
  );
}

import { useState } from 'react';
import { X } from 'lucide-react';
import { GALLERY } from '@/data/salon';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal text-gold-400 text-xs tracking-widest-2 uppercase mb-4">
            A Glimpse Inside
          </p>
          <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink-50">
            The <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="reveal flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-16 gold-line" />
            <span className="h-px w-16 gold-line" />
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {GALLERY.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img.src)}
              className={`reveal-scale group relative overflow-hidden rounded-xl cursor-pointer ${
                img.span === 'wide'
                  ? 'col-span-2'
                  : img.span === 'tall'
                    ? 'row-span-2'
                    : ''
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink-950/30 group-hover:bg-ink-950/10 transition-colors duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold-400/0 group-hover:ring-gold-400/30 rounded-xl transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ink-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs text-ink-200 tracking-wide">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-ink-950/95 cinematic-blur flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-gold-200 hover:text-gold-100"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

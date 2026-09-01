import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data/salon';

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 md:py-36 bg-ink-900 overflow-hidden">
      {/* Background decorative quote */}
      <Quote
        className="absolute top-16 left-1/2 -translate-x-1/2 w-[400px] h-[400px] text-gold-400/[0.03]"
        strokeWidth={1}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-gold-400 text-xs tracking-widest-2 uppercase mb-4">
            Client Love
          </p>
          <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink-50">
            Words From Our <span className="text-gradient-gold">Clients</span>
          </h2>
          <div className="reveal flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-16 gold-line" />
            <span className="h-px w-16 gold-line" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal glass rounded-2xl p-8 flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold-400 fill-gold-400" />
                ))}
              </div>

              <blockquote className="text-ink-200 leading-relaxed font-light italic flex-1">
                "{t.quote}"
              </blockquote>

              <figcaption className="mt-6 pt-6 border-t border-gold-400/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 flex items-center justify-center text-ink-900 font-display text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-ink-50 font-medium tracking-wide">{t.name}</p>
                  <p className="text-xs text-gold-400 tracking-wide uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

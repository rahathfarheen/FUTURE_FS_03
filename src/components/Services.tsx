import { Scissors, Palette, Sparkles, Heart, Wand2, Flower2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '@/data/salon';

const ICONS: Record<string, LucideIcon> = {
  scissors: Scissors,
  palette: Palette,
  sparkles: Sparkles,
  heart: Heart,
  wand: Wand2,
  flower: Flower2,
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36 bg-ink-950 overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-400/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-rosewood-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="reveal text-gold-400 text-xs tracking-widest-2 uppercase mb-4">
            What We Offer
          </p>
          <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink-50">
            Our Signature <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="reveal flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-16 gold-line" />
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="h-px w-16 gold-line" />
          </div>
          <p className="reveal mt-6 max-w-2xl mx-auto text-ink-300 leading-relaxed">
            From everyday elegance to bridal transformations, every service at
            Élan is performed by master stylists using premium products and
            time-honored techniques.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Sparkles;
            return (
              <article
                key={service.title}
                className="reveal group relative overflow-hidden rounded-2xl bg-ink-900 border border-ink-700/50 hover:border-gold-400/30 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-ink-950/80 border border-gold-400/20 flex items-center justify-center cinematic-blur">
                    <Icon className="w-5 h-5 text-gold-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="font-display text-2xl text-ink-50 mb-3 group-hover:text-gold-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-ink-700/50">
                    <span className="text-gold-300 font-medium tracking-wide text-sm">
                      {service.price}
                    </span>
                    <a
                      href="#contact"
                      className="text-xs tracking-widest uppercase text-ink-400 group-hover:text-gold-300 transition-colors flex items-center gap-1"
                    >
                      Book
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </a>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-400/0 to-gold-400/0 group-hover:from-gold-400/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

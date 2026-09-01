import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SALON } from '@/data/salon';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background image with Ken Burns + parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ${
            mounted ? 'animate-kenburns scale-100' : 'scale-110'
          }`}
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&w=1920)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/50 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/40" />
      </div>

      {/* Cinematic letterbox bars */}
      <div
        className="absolute top-0 left-0 right-0 h-[6vh] bg-ink-950 z-20 transition-all duration-1000"
        style={{ transform: mounted ? 'translateY(-100%)' : 'translateY(0)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[6vh] bg-ink-950 z-20 transition-all duration-1000"
        style={{ transform: mounted ? 'translateY(100%)' : 'translateY(0)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <p className="text-gold-300/90 text-xs sm:text-sm tracking-widest-2 uppercase mb-6">
            {SALON.location}
          </p>
        </div>

        <div
          className={`transition-all duration-[1200ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-ink-50 leading-none">
            {SALON.name}
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="flex items-center gap-4 mt-6">
            <span className="h-px w-12 sm:w-24 gold-line origin-center" />
            <p className="text-ink-200 text-sm sm:text-base tracking-cinematic uppercase whitespace-nowrap">
              {SALON.tagline}
            </p>
            <span className="h-px w-12 sm:w-24 gold-line origin-center" />
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <p className="mt-10 max-w-xl text-ink-300 text-base sm:text-lg leading-relaxed font-light">
            Where artistry meets elegance. A premier beauty destination in the
            heart of Shimoga — crafted for those who deserve the extraordinary.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 flex flex-col sm:flex-row gap-4 mt-10 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >
          <a
            href="#services"
            className="px-10 py-3.5 bg-gold-400 text-ink-900 font-medium tracking-wide rounded-full hover:bg-gold-300 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/30 hover:scale-105"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-10 py-3.5 border border-gold-400/50 text-gold-200 font-medium tracking-wide rounded-full hover:bg-gold-400/10 transition-all duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-1000 ${
          mounted ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1800ms' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-widest-2 uppercase text-ink-300">Scroll</span>
          <ChevronDown className="w-5 h-5 text-gold-300 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

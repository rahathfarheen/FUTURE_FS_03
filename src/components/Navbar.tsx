import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SALON } from '@/data/salon';
import { useScrollY } from '@/hooks/useScrollReveal';

export default function Navbar() {
  const scrollY = useScrollY();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 80;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'glass py-3 shadow-2xl shadow-black/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <span
              className={`text-2xl font-display font-medium tracking-wide transition-colors duration-500 ${
                scrolled ? 'text-gold-200' : 'text-gold-100'
              }`}
            >
              {SALON.name}
            </span>
            <span
              className={`hidden sm:block text-[10px] tracking-widest-2 uppercase transition-colors duration-500 ${
                scrolled ? 'text-ink-300' : 'text-ink-200/70'
              }`}
            >
              Shimoga
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-300 relative group ${
                  scrolled
                    ? 'text-ink-200 hover:text-gold-300'
                    : 'text-ink-100/80 hover:text-gold-200'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px gold-line transition-all duration-400 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gold-400/90 text-ink-900 text-sm font-medium tracking-wide rounded-full hover:bg-gold-300 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30"
            >
              Book Now
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden transition-colors ${scrolled ? 'text-gold-200' : 'text-ink-100'}`}
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/95 cinematic-blur"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-ink-900 border-l border-gold-400/10 p-8 flex flex-col transition-transform duration-500 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="text-2xl font-display text-gold-200">{SALON.name}</span>
            <button onClick={() => setMenuOpen(false)} className="text-ink-200 hover:text-gold-300" aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-lg font-display text-ink-100 hover:text-gold-300 transition-colors border-b border-ink-700/50"
                style={{
                  transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-auto pt-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center py-3 bg-gold-400 text-ink-900 font-medium rounded-full"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

import { Scissors, Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import { SALON, NAV_LINKS } from '@/data/salon';

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 border-t border-ink-800/60 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scissors className="w-5 h-5 text-gold-400" />
              <span className="font-display text-2xl text-gold-200">{SALON.name}</span>
            </div>
            <p className="text-ink-400 text-sm leading-relaxed mb-5 max-w-xs">
              {SALON.tagline} in the heart of {SALON.location}. Where artistry
              meets elegance, and every visit is an experience.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-ink-700 flex items-center justify-center text-ink-300 hover:text-gold-300 hover:border-gold-400/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-ink-700 flex items-center justify-center text-ink-300 hover:text-gold-300 hover:border-gold-400/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-ink-50 font-display text-lg mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink-400 text-sm hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ink-50 font-display text-lg mb-4">Reach Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-ink-400 text-sm">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                {SALON.location}
              </li>
              <li className="flex items-center gap-3 text-ink-400 text-sm">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                {SALON.email}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 text-xs tracking-wide">
            © {new Date().getFullYear()} {SALON.name} — {SALON.location}. All rights reserved.
          </p>
          <p className="text-ink-500 text-xs tracking-wide">
            This website is designed for learning purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}

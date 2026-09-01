import { Award, Users, Calendar, Smile } from 'lucide-react';

const STATS = [
  { icon: Calendar, value: '12+', label: 'Years of Excellence' },
  { icon: Smile, value: '15K+', label: 'Happy Clients' },
  { icon: Users, value: '8', label: 'Master Stylists' },
  { icon: Award, value: '5', label: 'Industry Awards' },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-ink-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image collage */}
          <div className="relative reveal-left">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Élan salon interior with natural light"
                loading="lazy"
                className="w-full h-[480px] md:h-[560px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gold-400/15" />
            </div>
            {/* Floating second image */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-44 h-56 md:w-56 md:h-72 rounded-xl overflow-hidden shadow-2xl border-4 border-ink-950 animate-float">
              <img
                src="https://images.pexels.com/photos/2504927/pexels-photo-2504927.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Stylist crafting an elegant updo"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-gold-400/20 rounded-full" />
          </div>

          {/* Right: Text */}
          <div className="reveal-right">
            <p className="text-gold-400 text-xs tracking-widest-2 uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink-50 leading-tight mb-6">
              Where Beauty Meets <span className="text-gradient-gold">Artistry</span>
            </h2>
            <div className="h-px w-20 gold-line mb-6" />
            <p className="text-ink-300 leading-relaxed mb-5">
              Founded in the heart of Shimoga, {''}Élan was born from a simple
              belief: that every person who walks through our doors deserves to
              feel extraordinary. Our journey began with a single chair and a
              passion for craft — today, we are Shimoga's most trusted
              destination for hair, beauty, and bridal artistry.
            </p>
            <p className="text-ink-400 leading-relaxed mb-8">
              Our team of master stylists brings together years of training from
              across India and abroad, combining global techniques with a deep
              understanding of local sensibilities. Every cut, every color,
              every brush stroke is an act of devotion to our craft.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-ink-700/50">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <stat.icon className="w-5 h-5 text-gold-400 mb-2" />
                  <p className="font-display text-3xl text-ink-50">{stat.value}</p>
                  <p className="text-[11px] tracking-wide text-ink-400 uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

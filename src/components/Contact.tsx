import { useState } from 'react';
import { MapPin, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SALON } from '@/data/salon';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', date: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', service: '', date: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-ink-950 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="reveal text-gold-400 text-xs tracking-widest-2 uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="reveal font-display text-4xl sm:text-5xl md:text-6xl font-light text-ink-50">
            Book Your <span className="text-gradient-gold">Appointment</span>
          </h2>
          <div className="reveal flex items-center justify-center gap-4 mt-6">
            <span className="h-px w-16 gold-line" />
            <span className="h-px w-16 gold-line" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="reveal-left space-y-8">
            {/* Location card */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink-50 mb-1">Visit Us</h3>
                  <p className="text-ink-300 leading-relaxed">
                    {SALON.location}
                  </p>
                  <p className="text-ink-400 text-sm mt-1">
                    Conveniently located in the heart of Shimoga city.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="glass rounded-xl p-6 hover:border-gold-400/30 transition-colors group">
              <a href={`mailto:${SALON.email}`} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold-400/10 border border-gold-400/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-gold-300 group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs tracking-wide text-ink-400 uppercase mb-1">Email Us</p>
                  <p className="text-ink-100 text-sm">{SALON.email}</p>
                </div>
              </a>
            </div>

            {/* Hours */}
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-5 h-5 text-gold-300" />
                <h3 className="font-display text-xl text-ink-50">Opening Hours</h3>
              </div>
              <ul className="space-y-3">
                {SALON.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-center justify-between py-2 border-b border-ink-700/40 last:border-0"
                  >
                    <span className="text-ink-300 text-sm tracking-wide">{h.day}</span>
                    <span className="text-gold-200 text-sm font-medium">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 space-y-5"
            >
              <h3 className="font-display text-2xl text-ink-50 mb-2">
                Request an Appointment
              </h3>
              <p className="text-ink-400 text-sm mb-4">
                Fill in your details and we'll email you back to confirm.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-wide text-ink-400 uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-ink-900/60 border border-ink-700/50 rounded-lg px-4 py-3 text-ink-100 text-sm focus:border-gold-400/50 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wide text-ink-400 uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-ink-900/60 border border-ink-700/50 rounded-lg px-4 py-3 text-ink-100 text-sm focus:border-gold-400/50 focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-wide text-ink-400 uppercase mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-ink-900/60 border border-ink-700/50 rounded-lg px-4 py-3 text-ink-100 text-sm focus:border-gold-400/50 focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Hair Styling & Cuts</option>
                    <option value="coloring">Hair Coloring & Highlights</option>
                    <option value="bridal">Bridal Makeup</option>
                    <option value="facial">Facial & Skin Care</option>
                    <option value="party">Party & Event Makeup</option>
                    <option value="spa">Spa & Relaxation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-wide text-ink-400 uppercase mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className="w-full bg-ink-900/60 border border-ink-700/50 rounded-lg px-4 py-3 text-ink-100 text-sm focus:border-gold-400/50 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-wide text-ink-400 uppercase mb-2">
                  Message <span className="text-ink-500 normal-case">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-ink-900/60 border border-ink-700/50 rounded-lg px-4 py-3 text-ink-100 text-sm focus:border-gold-400/50 focus:outline-none transition-colors resize-none"
                  placeholder="Any special requests?"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 bg-gold-400 text-ink-900 font-medium tracking-wide rounded-lg hover:bg-gold-300 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Request Sent — We'll Email You!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Request
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

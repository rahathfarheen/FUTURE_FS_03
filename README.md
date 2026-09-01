live website : https://future-fs-03-nitdhkl6t-rahathfarheen.vercel.app
# Élan — Luxury Salon & Beauty Studio

> A cinematic, production-ready website for a premium hair & beauty salon located in **Shimoga, Karnataka, India**.

Built as an internship project, this website showcases a modern salon with elegant screen transitions, scroll-reveal animations, a responsive gallery, service listings, client testimonials, and an appointment booking form.

---

## ✨ Features

- **Cinematic Hero Section** — Full-screen entrance with Ken Burns zoom effect, letterbox bars, staggered text animations, and parallax scrolling.
- **Scroll-Reveal Animations** — Every section fades, slides, or scales into view using `IntersectionObserver` (no external animation library).
- **Services Showcase** — Six detailed service cards (Hair Styling, Coloring, Bridal Makeup, Facials, Party Makeup, Spa) with images, descriptions, and pricing.
- **Interactive Gallery** — Masonry-style grid with hover zoom effects and a click-to-expand lightbox.
- **About Section** — Brand story with floating image collage and animated statistics counters.
- **Client Testimonials** — Glassmorphic review cards with star ratings.
- **Appointment Booking Form** — A structured form with name, phone, service selection, preferred date, and message, including a success confirmation state.
- **Responsive Design** — Optimized for mobile, tablet, and desktop with a slide-in mobile menu.
- **Premium Design System** — Custom color palette (ink, gold, rosewood, sage), Cormorant Garamond + Jost typography, and consistent 8px spacing.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI framework |
| **TypeScript** | Type-safe development |
| **Vite 5** | Build tool & dev server |
| **Tailwind CSS 3** | Utility-first styling with custom theme |
| **Lucide React** | Icon set |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav with glassmorphism + mobile drawer
│   ├── Hero.tsx            # Cinematic full-screen hero
│   ├── Services.tsx        # Service cards grid
│   ├── Gallery.tsx         # Masonry gallery with lightbox
│   ├── About.tsx           # Brand story + stats
│   ├── Testimonials.tsx    # Client review cards
│   ├── Contact.tsx         # Appointment form + location info
│   └── Footer.tsx          # Footer with links & socials
├── data/
│   └── salon.ts            # Salon info, services, gallery, testimonials
├── hooks/
│   └── useScrollReveal.ts  # IntersectionObserver reveal + scroll position
├── App.tsx                 # Root component
├── main.tsx                # Entry point
└── index.css               # Global styles, fonts, animations
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/elan-salon.git
cd elan-salon

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build      # Creates optimized production build in dist/
npm run preview    # Preview the production build locally
```

---

## 🎨 Design Highlights

### Color Palette

| Token | Usage |
|---|---|
| `ink` (50–950) | Neutral backgrounds, text, borders |
| `gold` (50–950) | Primary accent — headings, buttons, highlights |
| `rosewood` | Secondary accent — warm tones |
| `sage` | Tertiary — subtle natural greens |

### Typography

- **Display:** Cormorant Garamond — elegant serif for headings
- **Body:** Jost — clean sans-serif for body text

### Animations

- `kenburns` — Slow zoom/pan on hero background
- `fade-up` / `slide-left` / `slide-right` — Scroll-triggered entrance
- `scale-in` — Gallery image reveals
- `float` — Subtle floating motion on About images
- `shimmer` — Animated gold gradient text

---

## 📌 Services Listed

1. **Hair Styling & Cuts** — from ₹350
2. **Hair Coloring & Highlights** — from ₹1,200
3. **Bridal Makeup** — from ₹8,000
4. **Facial & Skin Care** — from ₹600
5. **Party & Event Makeup** — from ₹2,500
6. **Spa & Relaxation** — from ₹500

---

## 📍 Location

**Élan — Luxury Salon & Beauty Studio**
Shimoga, Karnataka, India

---

## 📄 License

This project is created for internship/educational purposes. All images are sourced from [Pexels](https://www.pexels.com) (free to use).

---

## 🤝 Credits

- **Images:** [Pexels](https://www.pexels.com)
- **Icons:** [Lucide](https://lucide.dev)
- **Fonts:** Google Fonts — Cormorant Garamond, Jost

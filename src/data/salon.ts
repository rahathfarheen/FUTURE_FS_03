export const SALON = {
  name: 'Élan',
  tagline: 'Luxury Salon & Beauty Studio',
  location: 'Shimoga, Karnataka, India',
  email: 'hello@elansalon.in',
  hours: [
    { day: 'Mon — Fri', time: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '9:00 AM – 9:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
};

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: 'scissors',
    title: 'Hair Styling & Cuts',
    description:
      'Precision cuts, blow-dries, and styling tailored to your face shape and lifestyle — crafted by senior stylists trained in the latest global trends.',
    price: 'from ₹350',
    image: 'https://images.pexels.com/photos/8834098/pexels-photo-8834098.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: 'palette',
    title: 'Hair Coloring & Highlights',
    description:
      'Global color, balayage, ombre, and foil highlights using premium ammonia-free dyes for rich, long-lasting, salon-glossy results.',
    price: 'from ₹1,200',
    image: 'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: 'sparkles',
    title: 'Bridal Makeup',
    description:
      'Signature bridal packages with HD airbrush makeup, hair setting, draping, and trial sessions — making your special day unforgettable.',
    price: 'from ₹8,000',
    image: 'https://images.pexels.com/photos/13933220/pexels-photo-13933220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: 'heart',
    title: 'Facial & Skin Care',
    description:
      'Deep-cleansing facials, anti-aging treatments, and gua sha therapy using clinical-grade products for radiant, healthy skin.',
    price: 'from ₹600',
    image: 'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: 'wand',
    title: 'Party & Event Makeup',
    description:
      'Glamorous looks for engagements, parties, and photoshoots — flawless base, statement eyes, and long-wear finishes.',
    price: 'from ₹2,500',
    image: 'https://images.pexels.com/photos/6954005/pexels-photo-6954005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    icon: 'flower',
    title: 'Spa & Relaxation',
    description:
      'Head massages, hair spas, and aromatherapy treatments designed to melt away stress and restore natural shine.',
    price: 'from ₹500',
    image: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  span: 'wide' | 'tall' | 'normal';
}

export const GALLERY: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant salon interior with stylish lighting',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/13933220/pexels-photo-13933220.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Makeup artist applying lipstick to a client',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/8834018/pexels-photo-8834018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Stylist with tools and mirror in modern salon',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/12115040/pexels-photo-12115040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Facial treatment with beautician applying mask',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Salon chairs with illuminated vanity mirrors',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/6954005/pexels-photo-6954005.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Makeup artist applying eyeshadow on client',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/8468125/pexels-photo-8468125.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hairdresser applying color with foil technique',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/10318055/pexels-photo-10318055.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Hairdresser styling with straightener',
    span: 'tall',
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ananya Rao',
    role: 'Bride',
    quote:
      'My bridal makeup at Élan was absolute perfection. The team made me feel like the most beautiful version of myself — the look lasted from the first ritual to the last dance.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Regular Client',
    quote:
      'I have been coming here for over a year. The hair color work is exceptional — natural, glossy, and exactly what I asked for. The ambience feels like a five-star retreat.',
    rating: 5,
  },
  {
    name: 'Kavya Gowda',
    role: 'Professional',
    quote:
      'Best salon in Shimoga, hands down. The facial treatments left my skin glowing for weeks. The staff are skilled, warm, and genuinely care about their craft.',
    rating: 5,
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

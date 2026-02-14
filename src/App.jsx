import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Instagram, Facebook, 
  ChevronRight, Users, Heart, Clock, Award, Send,
  Camera, ShoppingBag, Star, MessageCircle, ExternalLink,
  Target, Eye, Play, ShieldCheck, Lock, FileText, Quote
} from 'lucide-react';

/**
 * --- IMAGE & ASSET UPLOAD GUIDE ---
 * * 1. LOGO (Navbar/Footer): 
 * - Path: public/assets/logo.png
 * - Recommended Size: 200x60px (Transparent PNG)
 * * 2. HERO BANNER:
 * - Path: public/assets/hero-bg.jpg
 * - Recommended Size: 1920x1080px (High Res, Compressed)
 * * 3. COLLECTION CARDS:
 * - Recommended Size: 800x1000px (Portrait)
 * * 4. REELS SECTION:
 * - Recommended Size: 1080x1920px (9:16 Aspect Ratio)
 * * 5. GALLERY STORIES:
 * - Recommended Size: 1000x1200px
 * * 6. ABOUT SECTION:
 * - Recommended Size: 1200x800px
 */

// --- Components ---

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-[100]">
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Chat on WhatsApp</span>
      </a>
      
      <a 
        href="https://instagram.com/ashokfamilyshop" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <Instagram size={24} />
        <span className="absolute right-16 bg-white text-purple-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Follow Updates</span>
      </a>

      <a 
        href="tel:03412550123" 
        className="bg-amber-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <Phone size={24} />
        <span className="absolute right-16 bg-white text-amber-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Call Store</span>
      </a>
    </div>
  );
};

const CollectionModal = ({ collection, onClose }) => {
  if (!collection) return null;
  
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="h-64 md:h-auto bg-amber-100 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
               <ShoppingBag size={120} className="text-amber-300 opacity-50" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
               <span className="text-amber-400 font-bold uppercase tracking-widest text-sm">Now Trending</span>
               <h2 className="text-4xl font-bold">{collection.title}</h2>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900 border-b pb-4">Available Segments</h3>
            <div className="space-y-6">
              {collection.segments.map((segment, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg text-gray-800">{segment.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{segment.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-10 bg-amber-600 text-white py-4 rounded-xl font-bold hover:bg-amber-700 transition-all shadow-lg flex items-center justify-center">
              Book a Virtual Tour <ExternalLink size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'journey', label: 'Our Journey' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group" 
              onClick={() => setCurrentPage('home')}
            >
              <div className="relative h-12 w-auto flex items-center justify-center overflow-hidden">
                <img 
                  src="https://via.placeholder.com/200x60?text=ASHOK+LOGO" 
                  alt="Ashok The Family Shop" 
                  className="h-full object-contain group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden bg-amber-600 p-2 rounded-lg mr-2 items-center justify-center">
                  <ShoppingBag className="text-white h-6 w-6" />
                </div>
              </div>
              <span className="ml-3 text-2xl font-black text-gray-900 tracking-tighter hidden sm:block">
                ASHOK <span className="text-amber-600">THE FAMILY SHOP</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-amber-600 ${
                  currentPage === item.id ? 'text-amber-600 border-b-2 border-amber-600' : 'text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id ? 'bg-amber-50 text-amber-600' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const AnimatedCounter = ({ target, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={elementRef} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

const Footer = ({ setCurrentPage }) => (
  <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-1">
        <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-tighter">Ashok The Family Shop</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          Established in Neamatpur, providing quality ethnic and modern wear for the whole family for over three decades.
        </p>
        <div className="flex space-x-4">
          <Instagram className="cursor-pointer hover:text-amber-500 transition-colors" />
          <Facebook className="cursor-pointer hover:text-amber-500 transition-colors" />
          <Phone className="cursor-pointer hover:text-amber-500 transition-colors" />
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold mb-6 text-amber-500 uppercase tracking-widest text-sm">Quick Links</h4>
        <ul className="space-y-3">
          {['home', 'about', 'journey', 'gallery', 'contact'].map(page => (
            <li key={page}>
              <button 
                onClick={() => { setCurrentPage(page); window.scrollTo(0, 0); }}
                className="text-gray-400 hover:text-amber-500 transition-colors capitalize text-sm"
              >
                {page.replace('-', ' ')}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => { setCurrentPage('privacy'); window.scrollTo(0, 0); }}
              className="text-gray-400 hover:text-amber-500 transition-colors text-sm"
            >
              Privacy Policy
            </button>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 text-amber-500 uppercase tracking-widest text-sm">Collections</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li>Mens Wear</li>
          <li>Womens Ethnic</li>
          <li>Wedding Special</li>
          <li>Kids Fashion</li>
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold mb-6 text-amber-500 uppercase tracking-widest text-sm">Store Hours</h4>
        <ul className="space-y-3 text-gray-400 text-sm">
          <li className="flex justify-between"><span>Mon - Sat</span> <span>10:00 - 21:00</span></li>
          <li className="flex justify-between"><span>Sunday</span> <span>11:00 - 20:00</span></li>
          <li className="mt-4 text-[10px] italic text-amber-500 tracking-wider">*HOURS MAY VARY ON FESTIVALS</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-[10px] uppercase tracking-[0.3em]">
      © {new Date().getFullYear()} Ashok The Family Shop. All rights reserved. Neamatpur, West Bengal.
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setCurrentPage }) => {
  const [selectedCol, setSelectedCol] = useState(null);

  const reviews = [
    {
      name: "Rajesh Kumar Sharma",
      location: "Neamatpur",
      text: "The best place for wedding shopping. I bought my Sherwani from here and the fitting was perfect. Highly recommended!",
      stars: 5
    },
    {
      name: "Priyanka Das",
      location: "Asansol",
      text: "Wonderful collection of sarees! The staff is very patient and helpful. Dressed my whole family for Durga Puja from Ashok.",
      stars: 5
    },
    {
      name: "Amit Verma",
      location: "Kulti",
      text: "A heritage shop that never disappoints. The quality of fabric is much better than the big malls in the city.",
      stars: 4
    }
  ];

  const reels = [
    { url: "https://www.instagram.com/reel/DThP-tTj52R/", title: "Royal Ethnic Vibes", gradient: "from-pink-500 to-rose-500" },
    { url: "https://www.instagram.com/reel/DTJ986pD-WK/", title: "Wedding Glamour", gradient: "from-amber-400 to-orange-600" },
    { url: "https://www.instagram.com/reel/DTMfWV6Dyb8/", title: "Festive Favorites", gradient: "from-purple-500 to-indigo-600" },
    { url: "https://www.instagram.com/reel/DTcN2TBD5ty/", title: "Latest Arrivals", gradient: "from-emerald-500 to-teal-600" },
    { url: "https://www.instagram.com/reel/DUhZehyku-M/", title: "Signature Style", gradient: "from-blue-500 to-indigo-700" },
    { url: "https://www.instagram.com/reel/DUhZehyku-M/", title: "Elegant Designs", gradient: "from-yellow-500 to-orange-700" }
  ];

  const collections = [
    { 
      id: 'mens',
      title: "Men's Collection", 
      icon: "👔", 
      desc: "Suits, Sherwanis & Casuals", 
      color: "bg-blue-50",
      segments: [
        { name: "Royal Sherwanis", details: "Premium fabrics with handcrafted zardosi work for the modern groom." },
        { name: "Formal Blazers", details: "Sharp Italian cuts and slim-fit designs for corporate excellence." },
        { name: "Ethnic Kurtas", details: "Comfortable cotton and silk blends for every festive occasion." }
      ]
    },
    { 
      id: 'womens',
      title: "Women's Ethnic", 
      icon: "💃", 
      desc: "Lehengas & Designer Sarees", 
      color: "bg-pink-50",
      segments: [
        { name: "Designer Sarees", details: "Banarasi, Kanjivaram, and Net sarees curated from across India." },
        { name: "Grand Lehengas", details: "Exquisite bridal and bridesmaid collection with matching jewelry options." },
        { name: "Salwar Suits", details: "Ready-to-wear and unstitched sets in trendsetting prints." }
      ]
    },
    { 
      id: 'wedding',
      title: "Wedding Special", 
      icon: "💍", 
      desc: "Royal Bridal & Groom Wear", 
      color: "bg-red-50",
      segments: [
        { name: "Bridal Couture", details: "The centerpiece of our store. Custom-fitted royal bridal ensembles." },
        { name: "Groom's Gallery", details: "Turban, Mojari, and Stole sets to complete the royal look." },
        { name: "Engagement Wear", details: "Contemporary Indo-western gowns and Jodhpuris." }
      ]
    },
    { 
      id: 'kids',
      title: "Kids Kingdom", 
      icon: "🧸", 
      desc: "Cute & Comfortable Style", 
      color: "bg-green-50",
      segments: [
        { name: "Tiny Traditional", details: "Dhotis and Ghagras for children that are soft on skin." },
        { name: "Party Wear", details: "Tuxedos and fairy gowns for the little stars of the evening." },
        { name: "Casual Comfort", details: "High-quality play-wear for daily adventures." }
      ]
    },
    { 
      id: 'festive',
      title: "Festive Wear", 
      icon: "✨", 
      desc: "Traditional Outfits for All", 
      color: "bg-amber-50",
      segments: [
        { name: "Puja Collection", details: "Newest arrivals specifically for the festive season peak." },
        { name: "Gift Sets", details: "Premium boxed clothing sets perfect for gifting loved ones." }
      ]
    }
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
          <img 
             src="https://images.unsplash.com/photo-1594145070046-dfb5c65a41be?auto=format&fit=crop&q=80&w=1920" 
             alt="Heritage Shop Background" 
             className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="bg-amber-600/20 backdrop-blur-sm inline-block px-4 py-1 rounded-full text-amber-400 font-bold mb-6 border border-amber-600/30 tracking-widest text-xs">
             ESTD. 1990 IN NEAMATPUR
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight tracking-tighter">
            Elegance for the <br />
            <span className="text-amber-500">Whole Family</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-300 leading-relaxed">
            Discover a curated collection of ethnic, wedding, and modern wear. Join 500,000+ happy customers who trust Ashok The Family Shop.
          </p>
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-black transition-all transform hover:scale-105 shadow-xl flex items-center"
            >
              BROWSE COLLECTION <ChevronRight className="ml-2" />
            </button>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="px-10 py-5 border-2 border-white hover:bg-white hover:text-black text-white rounded-2xl font-black transition-all"
            >
              VISIT OUR SHOWROOM
            </button>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="bg-gray-50 rounded-3xl p-4 shadow-sm border border-gray-100">
               <AnimatedCounter target={5} suffix=" Lakh+" label="Happy Customers" />
            </div>
            <div className="bg-gray-50 rounded-3xl p-4 shadow-sm border border-gray-100">
               <AnimatedCounter target={1} suffix=" Lakh+" label="Trusted Families" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Reels Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start text-pink-500 font-black tracking-widest uppercase mb-4 text-sm">
                <Instagram size={20} className="mr-2" /> Trending Now
              </div>
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">Experience Our <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500">Virtual Runway</span></h2>
            </div>
            <a 
              href="https://instagram.com/ashokfamilyshop" 
              target="_blank" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl border border-white/20 font-bold transition-all flex items-center group"
            >
              View All Reels <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8">
            {reels.map((reel, idx) => (
              <a 
                key={idx} 
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative aspect-[9/16] rounded-3xl overflow-hidden group shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/10`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${reel.gradient} opacity-80 group-hover:scale-110 transition-transform duration-700`} />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="p-4 rounded-full bg-white/20 backdrop-blur-md scale-90 group-hover:scale-110 transition-transform">
                      <Play size={40} className="text-white fill-white" />
                   </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400 mb-2">Exclusive Look</p>
                  <h3 className="text-lg font-bold leading-tight group-hover:text-amber-400 transition-colors">{reel.title}</h3>
                  <div className="mt-4 flex items-center text-[10px] uppercase font-bold opacity-70">
                    <Heart size={12} className="mr-1 fill-white" /> Trending Reel
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:rotate-6 transition-transform">
                  <Target size={32} />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Our Mission</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To provide every family in Neamatpur and beyond with premium quality fashion that celebrates their most precious milestones. We are committed to honest pricing, exceptional craftsmanship, and a shopping experience that feels like coming home.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-50 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8">
                <div className="w-16 h-16 bg-amber-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg transform group-hover:-rotate-6 transition-transform">
                  <Eye size={32} />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">Our Vision</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  To be the ultimate heritage destination where tradition meets modern elegance. We envision dressing generations to come, preserving the art of Indian ethnic wear while evolving with global style trends to stay the heartbeat of family fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Signature Ranges</h2>
              <p className="text-gray-600 text-lg">Meticulously crafted for every milestone of your life.</p>
            </div>
            <div className="w-32 h-2 bg-amber-600 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((item, idx) => (
              <div 
                key={idx} 
                className={`${item.color} p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full`}
              >
                <div className="text-6xl mb-8 group-hover:rotate-12 transition-transform inline-block">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">{item.desc}</p>
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedCol(item)}
                    className="flex items-center text-amber-700 font-black text-lg bg-white/50 px-6 py-3 rounded-xl border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-all w-full justify-center"
                  >
                    View Range <ChevronRight size={24} className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-amber-600 font-black tracking-[0.3em] uppercase text-xs mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Loved by Families</h2>
            <div className="w-24 h-1.5 bg-amber-600 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] relative group border border-gray-100 hover:shadow-2xl hover:bg-white transition-all duration-500">
                <Quote size={40} className="text-amber-600/20 absolute top-8 right-8 group-hover:scale-110 transition-transform" />
                <div className="flex mb-6 text-amber-500">
                  {[...Array(rev.stars)].map((_, s) => <Star key={s} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 text-lg italic leading-relaxed mb-10">"{rev.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-black text-lg mr-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 leading-none mb-1">{rev.name}</h4>
                    <span className="text-xs text-amber-600 font-bold uppercase tracking-widest">{rev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Details */}
      <CollectionModal collection={selectedCol} onClose={() => setSelectedCol(null)} />

      {/* Quick Glimpses */}
      <section className="py-24 bg-amber-950 text-white relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
           <ShoppingBag size={300} />
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-black text-amber-500">Our Journey</h3>
            <p className="text-gray-400 text-lg leading-relaxed">Discover how we grew from a small neighborhood shop to a multi-story landmark in Neamatpur.</p>
            <button onClick={() => setCurrentPage('journey')} className="group flex items-center mx-auto md:mx-0 text-white font-bold text-lg">
              Explore Timeline <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-black text-amber-500">The Story Gallery</h3>
            <p className="text-gray-400 text-lg leading-relaxed">Step into our memory vault and see the beautiful moments shared by our customers.</p>
            <button onClick={() => setCurrentPage('gallery')} className="group flex items-center mx-auto md:mx-0 text-white font-bold text-lg">
              View All Stories <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-black text-amber-500">Expert Assistance</h3>
            <p className="text-gray-400 text-lg leading-relaxed">Book a personalized consultation with our stylists for your big wedding day.</p>
            <button onClick={() => setCurrentPage('contact')} className="group flex items-center mx-auto md:mx-0 text-white font-bold text-lg">
              Book Appointment <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Map & Contact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-amber-600 font-black tracking-[0.2em] mb-4 block">VISIT US</span>
            <h2 className="text-5xl font-black mb-10 leading-tight tracking-tighter">Find Our Neamatpur Showroom</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <MapPin className="text-amber-600 mb-4" />
                <h4 className="font-black mb-2 text-lg">Our Address</h4>
                <p className="text-gray-600 text-sm">Main Road, Neamatpur, Near Station, West Bengal - 713359</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <Phone className="text-amber-600 mb-4" />
                <h4 className="font-black mb-2 text-lg">Quick Contact</h4>
                <p className="text-gray-600 text-sm">+91 98765 43210 <br /> 0341-2550123</p>
              </div>
            </div>
            
            <form className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-black mb-8 text-gray-900">Send an Inquiry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="Full Name" className="p-4 bg-gray-50 border rounded-2xl focus:ring-4 ring-amber-100 outline-none border-gray-200" />
                <input type="email" placeholder="Email Address" className="p-4 bg-gray-50 border rounded-2xl focus:ring-4 ring-amber-100 outline-none border-gray-200" />
              </div>
              <textarea placeholder="Tell us what you're looking for..." rows="4" className="w-full p-4 bg-gray-50 border rounded-2xl focus:ring-4 ring-amber-100 outline-none border-gray-200 mb-6"></textarea>
              <button className="w-full bg-gray-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-black transition-all flex items-center justify-center shadow-lg">
                SUBMIT MESSAGE <Send size={20} className="ml-3" />
              </button>
            </form>
          </div>
          
          <div className="h-[600px] bg-gray-100 rounded-[3rem] overflow-hidden relative shadow-2xl border-8 border-white group">
            <div className="absolute inset-0 bg-amber-50 flex flex-col items-center justify-center p-12 text-center">
               <div className="relative mb-10">
                  <div className="absolute -inset-4 bg-amber-600/20 rounded-full animate-ping" />
                  <MapPin size={80} className="text-amber-600 relative z-10" />
               </div>
               <h3 className="text-3xl font-black text-gray-900 mb-4">Located in Neamatpur</h3>
               <p className="text-gray-600 max-w-sm mb-10 text-lg">Find us on the main market road, easily accessible for families from across the district.</p>
               <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-black shadow-xl hover:shadow-2xl transition-all border border-gray-100 flex items-center">
                  OPEN GOOGLE MAPS <ExternalLink size={20} className="ml-3" />
               </button>
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicyPage = () => (
  <div className="animate-fadeIn py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex items-center mb-10">
        <ShieldCheck className="text-amber-600 mr-4" size={48} />
        <h1 className="text-5xl font-black tracking-tight">Privacy Policy</h1>
      </div>
      
      <div className="prose prose-lg text-gray-700 max-w-none space-y-12">
        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
            <Lock size={20} className="mr-2 text-amber-600" /> Introduction
          </h2>
          <p>
            At Ashok The Family Shop, accessible from our showroom in Neamatpur and our digital presence, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.
          </p>
        </section>

        <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h2 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
            <FileText size={20} className="mr-2 text-amber-600" /> Information Collection
          </h2>
          <p className="mb-4">We collect several types of information for various purposes to provide and improve our service to you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Identification:</strong> Name, email address, phone number, and physical address when you inquire or make a purchase.</li>
            <li><strong>Usage Data:</strong> Information on how you interact with our services and staff.</li>
            <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-4">How We Use Your Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-bold text-gray-900">Service Delivery</h4>
              <p className="text-sm">To process your orders and provide tailored fashion recommendations.</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <h4 className="font-bold text-gray-900">Communication</h4>
              <p className="text-sm">To contact you regarding updates, offers, and collection launches.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-gray-900 mb-4">Data Security</h2>
          <p>
            The security of your data is important to us but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="border-t pt-10">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Contact Our Privacy Officer</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="mt-4 p-6 bg-amber-50 rounded-2xl border border-amber-100 inline-block">
            <p className="font-bold text-gray-900">Ashok The Family Shop</p>
            <p className="text-sm">Main Road, Neamatpur, West Bengal</p>
            <p className="text-sm">Email: privacy@ashokfamilyshop.com</p>
          </div>
        </section>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="animate-fadeIn py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-6xl font-black text-center mb-16 tracking-tight">Our Philosophy</h1>
      <div className="aspect-video bg-gray-100 rounded-[3rem] mb-16 flex items-center justify-center shadow-2xl overflow-hidden relative group">
        <Users size={150} className="text-amber-200 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-amber-900/10" />
      </div>
      <div className="prose prose-xl text-gray-700 max-w-none leading-relaxed">
        <p className="mb-8 text-2xl text-gray-900 font-bold italic border-l-8 border-amber-600 pl-8">
          "For 34 years, we've believed that clothes aren't just fabric; they are the vessels for your family's most cherished memories."
        </p>
        <p className="mb-8 text-lg">
          Ashok The Family Shop started as a dream in 1990 by Mr. Ashok. In the early days, Neamatpur was a growing market, and we grew alongside it. Our philosophy has always been simple: treat every customer like a guest in our home.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-amber-400 transition-colors">
            <Target className="text-amber-600 mb-6" size={40} />
            <h3 className="font-black text-2xl mb-4">Quality Mission</h3>
            <p className="text-gray-600">We prioritize quality and honesty in pricing above all else. Every thread counts.</p>
          </div>
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 hover:border-amber-400 transition-colors">
            <Star className="text-amber-600 mb-6" size={40} />
            <h3 className="font-black text-2xl mb-4">Modern Tradition</h3>
            <p className="text-gray-600">While we honor heritage designs, our collection stays updated with contemporary global trends.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const JourneyPage = () => {
  const milestones = [
    { year: "1990", title: "Humble Roots", desc: "The first 200 sq.ft store opened in Neamatpur by Mr. Ashok with a vision for quality family retail." },
    { year: "1998", title: "Department Expansion", desc: "Added dedicated sections for Men's suits and Women's ethnic sarees, doubling the store footprint." },
    { year: "2010", title: "Modern Showroom", desc: "Redesigned the entire experience into a multi-story modern showroom with air conditioning and premium decor." },
    { year: "2020", title: "Resilient Growth", desc: "Launched digital consultations and home delivery services to serve our families during challenging times." },
    { year: "2024", title: "5 Lakh+ Milestones", desc: "Proudly serving the third generation of families who shopped with us in the 90s." }
  ];

  return (
    <div className="animate-fadeIn py-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-6xl font-black text-center mb-24 tracking-tight">The Legacy Timeline</h1>
        <div className="relative border-l-4 border-amber-300 ml-6 md:ml-0 md:left-1/2 pb-20">
          {milestones.map((m, idx) => (
            <div key={idx} className={`mb-24 relative ${idx % 2 === 0 ? 'md:left-[-50%] md:pr-16 md:text-right' : 'md:pl-16'}`}>
              <div className="absolute top-0 w-10 h-10 bg-amber-600 rounded-full -left-[22px] md:left-[-20px] border-8 border-white shadow-xl z-10" />
              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                <span className="text-amber-600 font-black text-5xl block mb-4 group-hover:scale-110 transition-transform origin-left md:origin-center">{m.year}</span>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{m.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center bg-gray-900 p-20 rounded-[4rem] text-white shadow-3xl overflow-hidden relative">
          <Award size={100} className="text-amber-500 mx-auto mb-10" />
          <h2 className="text-5xl font-black mb-6">Building The Future</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">As Neamatpur evolves, Ashok The Family Shop continues to lead with innovation while keeping our core values of family first.</p>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const photos = [
    { id: 1, title: "The Golden Wedding", story: "Meera chose a custom ruby-red lehenga. It was the first wedding in her family in 10 years.", tag: "Bridal Couture" },
    { id: 2, title: "Grandfather's Gift", story: "Mr. Gupta came to buy his grandson's first suit for his graduation.", tag: "Formal Wear" },
    { id: 3, title: "Puja Rush 2023", story: "A glimpse of our store during the peak of Durga Puja.", tag: "Festive Vibes" },
    { id: 4, title: "The Anniversary Silk", story: "A couple celebrated 50 years of marriage by buying matching silk outfits.", tag: "Legacy" },
    { id: 5, title: "Kids Fashion Show", story: "A candid moment of a toddler trying on his first 'sherwani'.", tag: "Kids Kingdom" },
    { id: 6, title: "The Store Front", story: "Our Neamatpur landmark. Lit up and ready to welcome families.", tag: "Showroom" }
  ];

  return (
    <div className="animate-fadeIn py-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-black mb-6">Every Dress, A Story</h1>
          <p className="text-2xl text-gray-500 max-w-3xl mx-auto">We don't just sell clothes; we curate the background for your family's most important photos.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {photos.map((p) => (
            <div key={p.id} className="group flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] bg-amber-50 relative flex items-center justify-center overflow-hidden">
                 <Camera size={100} className="text-amber-200 group-hover:scale-125 transition-transform duration-700" />
                 <span className="absolute top-6 left-6 bg-amber-600 text-white text-xs px-4 py-2 rounded-full font-black uppercase tracking-widest shadow-lg">{p.tag}</span>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-3xl font-black mb-4 text-gray-900">{p.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">"{p.story}"</p>
                <div className="mt-auto flex items-center justify-between border-t pt-6 border-gray-100">
                   <div className="flex text-amber-500">
                      {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} className="fill-current" />)}
                   </div>
                   <span className="text-gray-400 font-bold text-sm italic">#AshokLegacy</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="animate-fadeIn py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h1 className="text-6xl font-black mb-10 leading-tight">Let's Dress Your <span className="text-amber-600">Celebration.</span></h1>
          <div className="space-y-12">
            <div className="flex items-center group">
              <div className="bg-white p-6 rounded-[2rem] shadow-xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all mr-8">
                <Phone size={36} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Direct Line</p>
                <p className="text-2xl font-black text-gray-900">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="bg-white p-6 rounded-[2rem] shadow-xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all mr-8">
                <Mail size={36} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Inquiry Mail</p>
                <p className="text-2xl font-black text-gray-900">care@ashokfamilyshop.com</p>
              </div>
            </div>
            <div className="flex items-center group">
              <div className="bg-white p-6 rounded-[2rem] shadow-xl text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all mr-8">
                <MapPin size={36} />
              </div>
              <div>
                <p className="text-sm text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Our Location</p>
                <p className="text-2xl font-black text-gray-900">Main Road, Neamatpur, WB</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[3.5rem] shadow-3xl border border-gray-100">
          {submitted ? (
            <div className="text-center py-20 animate-fadeIn">
               <div className="bg-green-100 text-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10">
                  <Send size={48} />
               </div>
               <h3 className="text-4xl font-black mb-6">Successfully Sent!</h3>
               <button onClick={() => setSubmitted(false)} className="text-amber-600 font-black text-xl hover:underline">SEND ANOTHER MESSAGE</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-black text-gray-400 mb-3 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:ring-4 ring-amber-100 focus:border-amber-400 outline-none transition-all" placeholder="Enter name" />
                </div>
                <div>
                  <label className="block text-sm font-black text-gray-400 mb-3 uppercase tracking-widest">Mobile No</label>
                  <input required type="tel" className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:ring-4 ring-amber-100 focus:border-amber-400 outline-none transition-all" placeholder="Enter number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-400 mb-3 uppercase tracking-widest">Select Category</label>
                <select className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:ring-4 ring-amber-100 focus:border-amber-400 outline-none appearance-none">
                  <option>Bridal & Wedding</option>
                  <option>Men's Ethnic</option>
                  <option>Kids Wear</option>
                  <option>Bulk Orders</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-gray-400 mb-3 uppercase tracking-widest">Message</label>
                <textarea required rows="5" className="w-full p-5 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:ring-4 ring-amber-100 focus:border-amber-400 outline-none transition-all" placeholder="How can we help you today?"></textarea>
              </div>
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-black text-2xl py-6 rounded-[2rem] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center transform hover:-translate-y-1">
                SEND MESSAGE <Send size={24} className="ml-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': return <AboutPage />;
      case 'journey': return <JourneyPage />;
      case 'gallery': return <GalleryPage />;
      case 'contact': return <ContactPage />;
      case 'privacy': return <PrivacyPolicyPage />;
      default: return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-amber-200 selection:text-amber-900 bg-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="relative">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      
      <FloatingActions />

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #d97706; border-radius: 10px; }

        .prose h1, .prose h2, .prose h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; }
      `}} />
    </div>
  );
}
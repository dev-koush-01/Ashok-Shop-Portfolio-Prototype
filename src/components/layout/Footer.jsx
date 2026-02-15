import { Instagram, Facebook, Phone } from "lucide-react";

export default function Footer({ setCurrentPage }) {

return(
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
}
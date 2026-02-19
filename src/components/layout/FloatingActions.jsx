import { MessageCircle, Phone, Instagram } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-[100]">
      <a 
        href="https://wa.me/916296324199"
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 bg-white text-green-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Chat on WhatsApp</span>
      </a>
      
      <a 
        href="https://www.instagram.com/ashokthefamilyshop?igsh=bWR3ZnBxbzRnY3lw" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <Instagram size={24} />
        <span className="absolute right-16 bg-white text-purple-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Follow Updates</span>
      </a>

      <a 
        href="tel:0341 7963307"
        className="bg-amber-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
      >
        <Phone size={24} />
        <span className="absolute right-16 bg-white text-amber-600 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">Call Store</span>
      </a>
    </div>
  );
};
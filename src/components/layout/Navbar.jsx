import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "journey", label: "Our Journey" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" }
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
                  src="/assets/logo.png" 
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

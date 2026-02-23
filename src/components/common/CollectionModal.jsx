import { X, ShoppingBag, ExternalLink} from "lucide-react";

export default function CollectionModal({ collection, onClose }) {
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
            {collection.image ? (
              <img 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <ShoppingBag size={120} className="text-amber-300 opacity-50" />
              </div>
            )}
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
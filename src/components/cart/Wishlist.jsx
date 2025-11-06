import { X, Heart, ShoppingBag, Sparkles, Trash2 } from 'lucide-react';
import { formatPrice } from '../../utils';

const Wishlist = ({ isOpen, onClose, wishlist, onRemoveFromWishlist, onAddToCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex animate-fade-in" onClick={onClose}>
      <div 
        className="glass w-full max-w-md ml-auto h-full shadow-2xl flex flex-col border-l border-white/10 animate-slide-up" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-red-50/50 to-pink-50/50 dark:from-red-900/20 dark:to-pink-900/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-medium">
                <Heart className="text-white" size={20} fill="currentColor" />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">
                  Wishlist
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'} saved
                </p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {wishlist.length > 0 ? (
            <div className="space-y-4">
              {wishlist.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:border-red-300 dark:hover:border-red-700 hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Product Image */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded-xl shadow-soft relative z-10" 
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-neutral-900 dark:text-white mb-1 truncate group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-lg font-bold text-gradient mb-4">
                        {formatPrice(item.price)}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onAddToCart(item)}
                          className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-lg font-semibold text-sm shadow-medium hover:shadow-large transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <ShoppingBag size={16} />
                          Add to Cart
                        </button>
                        <button
                          onClick={() => onRemoveFromWishlist(item.name)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-full mb-6">
                <Heart className="text-red-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Your wishlist is empty</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">Start adding items you love to your wishlist</p>
              <button
                onClick={onClose}
                className="btn-primary"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {wishlist.length > 0 && (
          <div className="p-6 border-t border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-red-50/30 to-pink-50/30 dark:from-red-900/10 dark:to-pink-900/10">
            <button
              onClick={() => {
                wishlist.forEach(item => onAddToCart(item));
                alert('All items added to cart!');
              }}
              className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              Add All to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;

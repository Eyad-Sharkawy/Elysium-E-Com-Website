import { memo } from 'react';
import { Heart, Star, ShoppingBag, Sparkles } from 'lucide-react';
import { formatPrice } from '../../utils';

const ProductCard = memo(({ product, onAddToCart, onToggleWishlist, isInWishlist, showFullCard = false }) => {
  return (
    <div className={`group relative ${showFullCard ? '' : 'hover:transform hover:-translate-y-3 transition-all duration-500'}`}>
      {/* Card Container */}
      <div className={`relative overflow-hidden rounded-3xl mb-4 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 ${showFullCard ? 'h-64' : 'h-80'} transition-all duration-500 shadow-soft hover:shadow-large`}>
        
        {/* Image Container with Overlay */}
        <div className="relative h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          
          {/* Floating Badges */}
          {product.sale && (
            <div className="absolute top-4 left-4 z-20 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 blur-md opacity-50"></div>
                <div className="relative bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <Sparkles size={12} />
                  SALE
                </div>
              </div>
            </div>
          )}
          {product.new && (
            <div className="absolute top-4 left-4 z-20 animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500 blur-md opacity-50"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                  NEW
                </div>
              </div>
            </div>
          )}

          {/* Wishlist Button */}
          <div className="absolute top-4 right-4 z-20">
            <button 
              onClick={() => onToggleWishlist(product)}
              className={`group/wishlist relative w-11 h-11 rounded-full flex items-center justify-center shadow-large transition-all duration-300 transform hover:scale-110 ${
                isInWishlist
                  ? 'bg-gradient-to-br from-red-500 to-red-600 text-white shadow-red-500/50'
                  : 'bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm text-neutral-600 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/30'
              }`}
            >
              <Heart 
                size={18} 
                fill={isInWishlist ? 'currentColor' : 'none'} 
                className={`transition-all duration-300 ${isInWishlist ? 'scale-110' : ''}`}
              />
              {isInWishlist && (
                <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-20"></span>
              )}
            </button>
          </div>

          {/* Product Image */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />

          {/* Quick Add Button - Hover Overlay */}
          {!showFullCard && (
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md text-neutral-900 dark:text-white py-3.5 rounded-xl font-bold text-sm shadow-large hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
              >
                <ShoppingBag size={18} className="group-hover/btn:animate-bounce" />
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-lg leading-tight text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {product.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gradient">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-neutral-400 dark:text-neutral-500 line-through font-medium">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={showFullCard ? 14 : 16} 
                fill="currentColor" 
                className="text-amber-400 drop-shadow-sm"
              />
            ))}
          </div>
        </div>

        {/* Full Card Add Button */}
        {showFullCard && (
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white py-3.5 rounded-xl font-bold shadow-medium hover:shadow-large transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Add to Cart
          </button>
        )}
      </div>

      {/* Subtle Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/0 via-primary-500/20 to-primary-500/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-500"></div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;

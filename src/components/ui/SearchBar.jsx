import { X, Search as SearchIcon, ShoppingBag, Sparkles } from 'lucide-react';
import { formatPrice } from '../../utils';

const SearchBar = ({ isOpen, onClose, searchQuery, onSearchChange, searchResults, onAddToCart, onNavigateToProducts }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 px-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="glass rounded-3xl shadow-2xl w-full max-w-3xl max-h-[75vh] overflow-hidden animate-slide-up border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Header */}
        <div className="p-6 border-b border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-primary-50/50 to-accent-pink-50/50 dark:from-primary-900/20 dark:to-accent-pink-900/20">
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <SearchIcon className="text-primary-500 dark:text-primary-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for products, brands, categories..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm border-2 border-neutral-200/50 dark:border-neutral-700/50 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all text-lg"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Search Hint */}
          {!searchQuery.trim() && (
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
              <Sparkles size={14} />
              <span>Start typing to find products</span>
            </p>
          )}
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto max-h-[60vh] scrollbar-hide">
          {searchQuery.trim() ? (
            searchResults.length > 0 ? (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                    Found {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'}
                  </p>
                </div>
                
                <div className="grid gap-3">
                  {searchResults.map((product, idx) => (
                    <div
                      key={idx}
                      className="group relative p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:bg-white dark:hover:bg-neutral-800 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-medium transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                      onClick={() => {
                        onNavigateToProducts();
                        onClose();
                      }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Product Image */}
                        <div className="relative flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-pink/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-xl shadow-soft group-hover:scale-105 transition-transform duration-300 relative z-10"
                          />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-neutral-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                            {product.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gradient">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-xs px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-semibold">
                              {product.category}
                            </span>
                          </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(product);
                          }}
                          className="flex-shrink-0 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold text-sm shadow-medium hover:shadow-large transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                          <ShoppingBag size={16} />
                          <span>Add</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-4">
                  <SearchIcon className="text-neutral-400" size={32} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">No products found</h3>
                <p className="text-neutral-600 dark:text-neutral-400">Try different keywords or browse our categories</p>
              </div>
            )
          ) : (
            <div className="p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-pink-100 dark:from-primary-900/30 dark:to-accent-pink-900/30 rounded-full mb-4">
                <Sparkles className="text-primary-600 dark:text-primary-400" size={32} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Start Your Search</h3>
              <p className="text-neutral-600 dark:text-neutral-400">Type to find products, brands, or categories</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

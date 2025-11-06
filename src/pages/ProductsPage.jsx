import { useState } from 'react';
import { Filter, Grid, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ui/ProductCard';
import { allProducts, categories } from '../constants/products';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { cart, wishlist } = useApp();

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Sparkles size={16} />
              <span className="text-sm font-semibold">Complete Collection</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Products
              <span className="block text-4xl md:text-5xl lg:text-6xl text-primary-200 mt-2">
                Discover Something Special
              </span>
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Explore our complete collection of premium fashion items
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter - Enhanced */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="text-primary-600 dark:text-primary-400" size={24} />
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`group relative px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-large scale-105'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 shadow-soft hover:shadow-medium border border-neutral-200 dark:border-neutral-700'
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {cat.label}
                {selectedCategory === cat.id && (
                  <>
                    <span className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-pink rounded-full opacity-20 blur-sm"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-md"></span>
                  </>
                )}
              </button>
            ))}
          </div>
          
          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Showing <span className="font-bold text-primary-600 dark:text-primary-400">{filteredProducts.length}</span> products
            </p>
          </div>
        </div>

        {/* Products Grid - Enhanced */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <div 
              key={idx} 
              className="animate-fade-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <ProductCard
                product={product}
                onAddToCart={cart.addToCart}
                onToggleWishlist={wishlist.toggleWishlist}
                isInWishlist={wishlist.isInWishlist(product.name)}
                showFullCard={true}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full mb-6">
              <Grid className="text-neutral-400" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">No products found</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Try selecting a different category</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn-primary"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

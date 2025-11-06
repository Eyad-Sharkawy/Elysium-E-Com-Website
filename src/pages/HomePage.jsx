import { User, Users, Package, Tag, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/ui/ProductCard';
import { homeCategories, latestProducts, hotDeals } from '../constants/products';

const iconMap = { User, Users, Package, Tag };

const HomePage = ({ onNavigate }) => {
  const { cart, wishlist } = useApp();

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white pt-32 pb-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <Sparkles size={16} />
                <span className="text-sm font-semibold">New Collection 2024</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-white via-accent-pink-100 to-white bg-clip-text text-transparent">
                  Perfect Style
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-xl">
                Premium fashion collection for men, women, and kids. Shop the latest trends with exclusive deals.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => onNavigate('products')} 
                  className="btn-primary group"
                >
                  Shop Now
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl shadow-soft hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2">
                  View Collection
                </button>
              </div>
            </div>
            
            <div className="hidden md:block relative animate-float">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-pink rounded-3xl blur-2xl opacity-50"></div>
                
                {/* Image Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="/images/baner-right-image-01.jpg" 
                    alt="Fashion Collection" 
                    className="w-full h-[500px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                </div>
                
                {/* Floating Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-pink/30 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Enhanced */}
      <section className="py-24 -mt-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeCategories.map((cat, idx) => {
              const IconComponent = iconMap[cat.icon];
              return (
                <div 
                  key={idx} 
                  className="group relative card-hover overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {/* Image with Overlay */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  
                  <div className="p-6 relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br from-${cat.color}-100 to-${cat.color}-200 dark:from-${cat.color}-900/30 dark:to-${cat.color}-800/30 rounded-2xl flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`text-${cat.color}-600 dark:text-${cat.color}-400`} size={32} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                      {cat.desc}
                    </p>
                    
                    <button 
                      onClick={() => onNavigate('products')} 
                      className={`inline-flex items-center gap-2 text-${cat.color}-600 dark:text-${cat.color}-400 font-bold hover:gap-3 transition-all group/link`}
                    >
                      Shop Now 
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Hover Gradient Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-pink opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Products - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="text-primary-500" size={24} />
              <span className="text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-wider text-sm">
                Latest Arrivals
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Discover Our Newest
              <span className="block text-gradient">Additions</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Fresh styles added weekly. Be the first to own the latest trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestProducts.map((product, idx) => (
              <div key={idx} style={{ animationDelay: `${idx * 100}ms` }} className="animate-fade-in">
                <ProductCard
                  product={product}
                  onAddToCart={cart.addToCart}
                  onToggleWishlist={wishlist.toggleWishlist}
                  isInWishlist={wishlist.isInWishlist(product.name)}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => onNavigate('products')} 
              className="btn-primary text-lg px-10 py-4"
            >
              Explore All Products
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Hot Deals - Enhanced */}
      <section className="py-24 bg-neutral-900 dark:bg-neutral-950 transition-colors duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="text-red-500" size={24} />
              <span className="text-red-400 font-semibold uppercase tracking-wider text-sm">
                Limited Time
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Hot Deals
              <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                🔥 Don't Miss Out
              </span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Exclusive offers available for a limited time only
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {hotDeals.map((deal, idx) => (
              <div 
                key={idx} 
                className={`relative group bg-gradient-to-br ${deal.gradient} rounded-3xl p-8 text-white hover:scale-105 transition-all duration-500 shadow-large hover:shadow-2xl overflow-hidden`}
              >
                {/* Animated Background Image */}
                <div className="absolute inset-0 opacity-20">
                  <img 
                    src={deal.image} 
                    alt={deal.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="mb-6">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-white blur-md opacity-50"></div>
                      <span className={`relative inline-block bg-white ${deal.textColor} px-5 py-2.5 rounded-full text-sm font-black shadow-xl`}>
                        {deal.discount}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {deal.title}
                  </h3>
                  <p className="mb-8 text-lg opacity-90 leading-relaxed">
                    {deal.description}
                  </p>
                  
                  <button 
                    className={`bg-white ${deal.textColor} px-8 py-4 rounded-xl font-bold text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2`}
                    onClick={() => onNavigate('products')}
                  >
                    Shop Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

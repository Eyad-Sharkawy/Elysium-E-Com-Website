import { useState } from 'react';
import { Heart, ShoppingCart, Search, Menu, X, Moon, Sun } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import SearchBar from '../ui/SearchBar';
import Cart from '../cart/Cart';
import Wishlist from '../cart/Wishlist';
import { allProducts } from '../../constants/products';

const Navigation = ({ currentPage, onNavigate }) => {
  const { darkMode, toggleDarkMode, cart, wishlist } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSearchResults = searchQuery.trim() 
    ? allProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <nav className="glass border-b border-neutral-200/50 dark:border-neutral-700/50 fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="relative">
                <img src="/images/main-logo.png" alt="Elysium Fashion" className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-2xl font-bold text-gradient">Elysium</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              {['home', 'products', 'about', 'contact'].map((page) => (
                <button 
                  key={page}
                  onClick={() => onNavigate(page)} 
                  className={`relative px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    currentPage === page 
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30' 
                      : 'text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
                >
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                  {currentPage === page && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-pink rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleDarkMode} 
                className="relative p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 transform hover:scale-110" 
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button 
                onClick={() => setSearchOpen(!searchOpen)} 
                className="relative p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-300 transform hover:scale-110"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button 
                onClick={() => setWishlistOpen(!wishlistOpen)} 
                className="relative p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-300 transform hover:scale-110"
                aria-label="Wishlist"
              >
                <Heart size={20} />
                {wishlist.wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {wishlist.wishlist.length}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setCartOpen(!cartOpen)} 
                className="relative p-2 rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all duration-300 transform hover:scale-110"
                aria-label="Shopping Cart"
              >
                <ShoppingCart size={20} />
                {cart.cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {cart.getCartItemCount()}
                  </span>
                )}
              </button>
              <button 
                onClick={() => onNavigate('signin')} 
                className="hidden md:block bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-2.5 rounded-xl font-semibold shadow-medium hover:shadow-large transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Sign In
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t dark:border-gray-700">
              <button onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Home</button>
              <button onClick={() => { onNavigate('products'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Products</button>
              <button onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">About</button>
              <button onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Contact</button>
            </div>
          )}
        </div>
      </nav>

      <SearchBar
        isOpen={searchOpen}
        onClose={() => { setSearchOpen(false); setSearchQuery(''); }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchResults={filteredSearchResults}
        onAddToCart={cart.addToCart}
        onNavigateToProducts={() => onNavigate('products')}
      />

      <Wishlist
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlist={wishlist.wishlist}
        onRemoveFromWishlist={wishlist.removeFromWishlist}
        onAddToCart={cart.addToCart}
      />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart.cart}
        onRemoveFromCart={cart.removeFromCart}
        onUpdateQuantity={cart.updateCartQuantity}
        getCartTotal={cart.getCartTotal}
        getCartItemCount={cart.getCartItemCount}
      />
    </>
  );
};

export default Navigation;

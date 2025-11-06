import { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const cart = useCart();
  const wishlist = useWishlist();

  const handleToggleWishlist = (product) => {
    if (wishlist.isInWishlist(product.name)) {
      wishlist.removeFromWishlist(product.name);
    } else {
      wishlist.addToWishlist(product);
    }
  };

  const value = {
    darkMode,
    toggleDarkMode,
    cart,
    wishlist: {
      ...wishlist,
      toggleWishlist: handleToggleWishlist
    }
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}


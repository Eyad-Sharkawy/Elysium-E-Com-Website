import { useLocalStorage } from './useLocalStorage';

export function useWishlist() {
  const [wishlist, setWishlist] = useLocalStorage('wishlist', []);

  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.name === product.name)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productName) => {
    setWishlist(wishlist.filter(item => item.name !== productName));
  };

  const isInWishlist = (productName) => {
    return wishlist.some(item => item.name === productName);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };
}


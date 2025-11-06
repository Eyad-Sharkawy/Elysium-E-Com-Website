import { useLocalStorage } from './useLocalStorage';

export function useCart() {
  const [cart, setCart] = useLocalStorage('cart', []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      setCart(cart.map(item => 
        item.name === product.name 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter(item => item.name !== productName));
  };

  const updateCartQuantity = (productName, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productName);
    } else {
      setCart(cart.map(item => 
        item.name === productName 
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartTotal,
    getCartItemCount
  };
}


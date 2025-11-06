import { X, ShoppingCart, Trash2, Plus, Minus, Sparkles } from 'lucide-react';
import { formatPrice } from '../../utils';

const Cart = ({ isOpen, onClose, cart, onRemoveFromCart, onUpdateQuantity, getCartTotal, getCartItemCount }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex animate-fade-in" onClick={onClose}>
      <div 
        className="glass w-full max-w-md ml-auto h-full shadow-2xl flex flex-col border-l border-white/10 animate-slide-up" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-primary-50/50 to-accent-pink-50/50 dark:from-primary-900/20 dark:to-accent-pink-900/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-medium">
                <ShoppingCart className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold dark:text-white">
                  Shopping Cart
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {getCartItemCount()} {getCartItemCount() === 1 ? 'item' : 'items'}
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

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    {/* Product Image */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-pink/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 object-cover rounded-xl shadow-soft relative z-10" 
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-neutral-900 dark:text-white mb-1 truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-lg font-bold text-gradient mb-3">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-700 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}
                            className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-800 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-10 text-center font-bold dark:text-white">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                            className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-800 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                          >
                            <Plus size={16} />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => onRemoveFromCart(item.name)}
                          className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all"
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
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-full mb-6">
                <ShoppingCart className="text-neutral-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">Your cart is empty</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">Start adding items to your cart</p>
              <button
                onClick={onClose}
                className="btn-primary"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>

        {/* Footer with Total */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-neutral-200/50 dark:border-neutral-700/50 bg-gradient-to-r from-primary-50/30 to-accent-pink-50/30 dark:from-primary-900/10 dark:to-accent-pink-900/10">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">Subtotal:</span>
                <span className="text-xl font-bold text-gradient">
                  {formatPrice(getCartTotal())}
                </span>
              </div>
              
              <button
              onClick={() => {
                // In production, this would redirect to checkout page
                // Example: window.location.href = '/checkout';
                alert('Redirecting to checkout...');
                onClose();
              }}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2"
              >
                <Sparkles size={20} />
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-center text-neutral-500 dark:text-neutral-400">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

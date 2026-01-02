import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
    const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-secondary border-l border-white/10 z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center">
                            <h2 className="text-2xl font-serif font-bold text-white">Your Cart</h2>
                            <button onClick={toggleCart} className="text-gray-400 hover:text-white transition-colors">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <p className="text-gray-400 text-lg">Your cart is empty.</p>
                                    <button
                                        onClick={toggleCart}
                                        className="btn-outline"
                                    >
                                        Start Browsing
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 p-4 bg-primary/30 rounded-lg border border-white/5">
                                        <img src={item.cover} alt={item.title} className="w-20 h-28 object-cover rounded shadow-sm" />
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h4 className="font-serif font-bold text-lg text-white leading-tight mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-400">{item.author}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center space-x-3 bg-primary/50 rounded px-2 py-1 border border-white/10">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="text-gray-400 hover:text-white"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="text-gray-400 hover:text-white"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <span className="font-bold text-accent">${(item.price * item.quantity).toFixed(2)}</span>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-red-400 hover:text-red-300 transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-primary/20">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-400">Subtotal</span>
                                    <span className="text-2xl font-bold font-serif text-white">${cartTotal.toFixed(2)}</span>
                                </div>
                                <button className="btn-primary w-full shadow-lg hover:shadow-glow">
                                    Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import { books } from '../data/books';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
        return (
            <div className="container mx-auto py-20 text-center">
                <h2 className="text-2xl text-white mb-4">Book not found</h2>
                <button onClick={() => navigate('/')} className="text-accent underline">
                    Return Home
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-primary py-12">
            <div className="container mx-auto px-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-center bg-secondary/30 p-12 rounded-lg border border-white/5"
                    >
                        <div className="relative w-64 md:w-80 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                            <img src={book.cover} alt={book.title} className="w-full h-auto rounded-r-md shadow-glow" />
                        </div>
                    </motion.div>

                    {/* Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{book.category}</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">{book.title}</h1>
                        <p className="text-xl text-gray-300 mb-6 font-serif italic">by {book.author}</p>

                        <div className="flex items-center space-x-4 mb-8">
                            <div className="flex text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} />
                                ))}
                            </div>
                            <span className="text-gray-500">|</span>
                            <span className="text-gray-400">124 Reviews</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            {book.description}
                            <span className="block mt-4 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </span>
                        </p>

                        <div className="flex items-center mb-8">
                            <span className="text-4xl font-bold text-white mr-6">${book.price}</span>
                        </div>

                        <div className="flex space-x-4 mb-10">
                            <button
                                onClick={() => addToCart(book)}
                                className="btn-primary flex-1 flex items-center justify-center gap-2 text-lg"
                            >
                                <ShoppingBag size={20} /> Add to Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
                            <div className="flex items-start space-x-3">
                                <Truck className="text-accent mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white text-sm">Free Shipping</h4>
                                    <p className="text-gray-500 text-xs">On orders over $50</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <ShieldCheck className="text-accent mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-white text-sm">Secure Payment</h4>
                                    <p className="text-gray-500 text-xs">100% Secure Transaction</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

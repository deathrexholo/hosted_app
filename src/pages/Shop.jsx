import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Filter, Star, ChevronDown } from 'lucide-react';
import { books } from '../data/books';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Get unique categories
    const categories = ["All", ...new Set(books.map(book => book.category))];

    const filteredBooks = selectedCategory === "All"
        ? books
        : books.filter(book => book.category === selectedCategory);

    return (
        <div className="min-h-screen bg-primary pt-8 pb-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                    <div>
                        <h1 className="text-5xl font-serif font-bold text-white mb-4">The Collection</h1>
                        <p className="text-gray-400">Browse our extensive catalog of rare and popular titles.</p>
                    </div>

                    {/* Filter / Sort Controls */}
                    <div className="flex gap-4 mt-6 md:mt-0">
                        <div className="relative group">
                            <button className="flex items-center gap-2 bg-secondary border border-white/10 px-4 py-2 rounded text-sm text-gray-300 hover:text-white hover:border-accent transition-colors">
                                <Filter size={16} /> Filter: {selectedCategory} <ChevronDown size={14} />
                            </button>
                            {/* Dropdown */}
                            <div className="absolute right-0 top-full mt-2 w-48 bg-secondary border border-white/10 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                                {categories.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className="block w-full text-left px-4 py-3 text-sm text-gray-400 hover:bg-white/5 hover:text-accent transition-colors first:rounded-t last:rounded-b"
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredBooks.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-[2/3] overflow-hidden rounded-md mb-4 relative bg-secondary">
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        to={`/product/${book.id}`}
                                        className="bg-white text-primary px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>

                            <h3 className="font-serif font-bold text-lg text-white mb-1">{book.title}</h3>
                            <p className="text-sm text-gray-400 mb-2">{book.author}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-accent">${book.price}</span>
                                <div className="flex text-yellow-500">
                                    <Star size={12} fill="currentColor" />
                                    <span className="text-xs text-gray-500 ml-1">4.8</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredBooks.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No books found in this category.</p>
                        <button onClick={() => setSelectedCategory("All")} className="text-accent underline mt-2">Clear filters</button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Shop;

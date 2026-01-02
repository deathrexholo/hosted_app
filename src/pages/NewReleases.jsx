import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Sparkles } from 'lucide-react';
import { books } from '../data/books';

const NewReleases = () => {
    const newBooks = books.filter(book => book.isNew);

    return (
        <div className="min-h-screen bg-primary pt-12 pb-20">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 text-accent border border-accent/30 bg-accent/5 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
                    >
                        <Sparkles size={16} /> Just Arrived
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">New Releases</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Be the first to explore the latest additions to our curated library.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {newBooks.map((book, index) => (
                        <motion.div
                            key={book.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 relative shadow-2xl">
                                <img
                                    src={book.cover}
                                    alt={book.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Badge */}
                                <div className="absolute top-4 left-4 bg-accent text-primary font-bold px-3 py-1 text-xs uppercase tracking-wider shadow-lg">
                                    Fresh Print
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <Link
                                        to={`/product/${book.id}`}
                                        className="w-full btn-primary block text-center"
                                    >
                                        View Book
                                    </Link>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="font-serif font-bold text-2xl text-white mb-2 group-hover:text-accent transition-colors">{book.title}</h3>
                                <p className="text-lg text-gray-400 mb-2">{book.author}</p>
                                <span className="font-bold text-xl text-accent">${book.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default NewReleases;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { books } from '../data/books';

const Home = () => {
  const featuredBooks = books.slice(0, 3);

  return (
    <div className="bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Library background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif font-bold leading-tight"
            >
              Storytelling <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                Reimagined
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 max-w-lg"
            >
              Discover a curated collection of rare editions, modern classics, and new voices in a setting built for book lovers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex space-x-4"
            >
              <Link to="/shop" className="btn-primary flex items-center gap-2">
                Browse Collection <ArrowRight size={20} />
              </Link>
              <Link to="/sell" className="btn-outline">
                Start Selling
              </Link>
            </motion.div>
          </div>

          {/* Hero Image / 3D Book Showpiece (Optional visual element) */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 flex justify-center perspective-1000"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative w-64 h-96 md:w-80 md:h-[500px] transform rotate-y-12 hover:rotate-y-0 transition-transform duration-500 shadow-2xl">
              <img
                src={books[0].cover}
                alt="Featured Book"
                className="w-full h-full object-cover rounded-r-md shadow-glow"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-4">Trending Now</h2>
              <p className="text-gray-400">The most anticipated reads of the season.</p>
            </div>
            <Link to="/new-releases" className="text-accent hover:text-white flex items-center gap-2 transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                <div className="aspect-[2/3] overflow-hidden rounded-md mb-6 relative">
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <Link to={`/product/${book.id}`} className="btn-primary transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </Link>
                  </div>
                  <Link to={`/product/${book.id}`}>
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </Link>
                  {book.isNew && (
                    <span className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider">
                      New
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-accent transition-colors">{book.title}</h3>
                <p className="text-gray-400 mb-2">{book.author}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">${book.price}</span>
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < 4 ? "currentColor" : "none"} />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl font-serif font-bold mb-6">Join the Inner Circle</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Get access to signed editions, author interviews, and member-only sales.
          </p>
          <div className="flex flex-col md:flex-row justify-center max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-primary/50 border border-white/20 px-6 py-4 rounded-md focus:outline-none focus:border-accent text-white flex-grow backdrop-blur-sm"
            />
            <button className="btn-primary whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

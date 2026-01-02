import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary pt-16 pb-8 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-serif font-bold text-white">
                            LUMINA<span className="text-accent">.</span>BOOKS
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Curating the finest literary journeys for the modern reader. Experience the art of storytelling in a new light.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Explore</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">New Releases</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Collections</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Rare Editions</a></li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Support</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Order Status</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Sell with Us</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Stay Connected</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for exclusive offers and literary news.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-white/5 border border-white/10 px-4 py-2 rounded-l-md focus:outline-none focus:border-accent text-white flex-grow text-sm"
                            />
                            <button className="bg-accent text-primary px-4 py-2 rounded-r-md font-bold hover:bg-accent-hover transition-colors">
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Lumina Books. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400 hover:text-white">
                        <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, DollarSign, Package, Upload } from 'lucide-react';
import { Link } from 'react-router-dom';

const Seller = () => {
    const steps = [
        {
            icon: <Upload size={32} />,
            title: "1. List Your Books",
            description: "Scan the barcode or enter the ISBN. our system automatically fetches the details."
        },
        {
            icon: <Package size={32} />,
            title: "2. Ship with Ease",
            description: "We provide a prepaid shipping label. Just pack your books and drop them off."
        },
        {
            icon: <DollarSign size={32} />,
            title: "3. Get Paid",
            description: "Once your books are sold, earnings are deposited directly to your bank account."
        }
    ];

    return (
        <div className="min-h-screen bg-primary pt-12">
            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-24">
                <div className="bg-secondary/40 rounded-2xl p-12 md:p-24 border border-white/5 relative overflow-hidden text-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 relative z-10"
                    >
                        Turn Your Library <br />
                        <span className="text-accent">Into Income</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 relative z-10"
                    >
                        Join thousands of book lovers who are sharing their collections with the world. Simple, secure, and rewarding.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="btn-primary inline-flex items-center gap-2 relative z-10"
                    >
                        Start Selling Now <ArrowRight size={20} />
                    </motion.button>
                </div>
            </section>

            {/* How it Works */}
            <section className="container mx-auto px-4 mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">How It Works</h2>
                    <p className="text-gray-400">Selling your books has never been easier.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-secondary/20 p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-colors"
                        >
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6 mx-auto">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h3>
                            <p className="text-gray-400 text-center leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* FAQ / Info */}
            <section className="bg-white/5 py-24">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-serif font-bold text-white mb-6">Why Sell With Lumina?</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-accent" />
                                <p className="text-gray-300">Detailed analytics on your sales performance.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-accent" />
                                <p className="text-gray-300">Access to a community of serious collectors.</p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 w-2 h-2 rounded-full bg-accent" />
                                <p className="text-gray-300">Secure payments processed within 24 hours.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 bg-gradient-to-br from-secondary to-primary p-8 rounded-2xl border border-white/10">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Ready to clear your shelves?</h3>
                            <p className="text-gray-400 mb-8">Create your seller account in minutes.</p>
                            <button className="btn-outline w-full">Create Account</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Seller;

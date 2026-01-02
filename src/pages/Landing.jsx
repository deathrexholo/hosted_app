import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, ShoppingBag, RefreshCw } from 'lucide-react';

const Landing = () => {
    // 3D Card Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const springConfig = { damping: 25, stiffness: 200 };
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct * 200);
        y.set(yPct * 200);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="min-h-screen bg-primary text-white font-sans overflow-hidden">
            {/* Header */}
            <header className="absolute top-0 w-full z-50 p-6 md:px-12 flex justify-between items-center">
                <div className="text-2xl font-serif font-bold tracking-wider">
                    LUMINA<span className="text-accent">.</span>BOOKS
                </div>
                <nav className="hidden md:flex gap-8 items-center">
                    <a href="#features" className="text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-xs">Features</a>
                    <Link to="/library" className="btn-primary py-2 px-6 text-xs transform hover:-translate-y-1 shadow-glow-sm">
                        Launch App
                    </Link>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col lg:flex-row items-center justify-center container mx-auto px-6">
                {/* Background Effect */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full translate-x-1/2 scale-150 pointer-events-none" />

                <div className="lg:w-1/2 space-y-8 relative z-10 pt-20 lg:pt-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl font-serif font-bold leading-tight"
                    >
                        Discover Rare <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
                            Stories
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-400 max-w-lg leading-relaxed"
                    >
                        An immersive digital bookstore experience. Buy, sell, and collect the finest literature in a premium environment designed for bibliophiles.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/library" className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4">
                            Enter the Library <ArrowRight />
                        </Link>
                    </motion.div>
                </div>

                {/* 3D Visual */}
                <div className="lg:w-1/2 h-[500px] flex items-center justify-center relative perspective-1000 mt-12 lg:mt-0">
                    <motion.div
                        style={{ rotateX: rotateXSpring, rotateY: rotateYSpring }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="w-72 h-[450px] bg-gradient-to-br from-[#1e2532] to-[#111625] rounded-xl border border-white/10 shadow-2xl relative flex flex-col items-center justify-center cursor-pointer group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none" />
                        <Book size={64} className="text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-2xl font-serif font-bold text-white">Lumina App</h3>
                        <p className="text-gray-500 mt-2">Premium Edition</p>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -right-8 -top-8 w-16 h-16 bg-secondary rounded-lg border border-white/10 flex items-center justify-center shadow-xl"
                        >
                            <ShoppingBag className="text-accent" size={24} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute -left-8 bottom-20 w-16 h-16 bg-secondary rounded-lg border border-white/10 flex items-center justify-center shadow-xl"
                        >
                            <RefreshCw className="text-accent" size={24} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features Preview */}
            <section id="features" className="py-24 border-t border-white/5 bg-secondary/20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-4">Why Lumina?</h2>
                        <p className="text-gray-400">More than just a bookstore.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Book />, title: "Curated", desc: "Hand-picked selections including rare first editions." },
                            { icon: <ShoppingBag />, title: "Seamless", desc: "Fluid shopping journey with instant-cart technology." },
                            { icon: <RefreshCw />, title: "Exchange", desc: "Turn your own library into income efficiently." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-8 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors"
                            >
                                <div className="text-accent mb-4 transform scale-125 origin-left">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Landing;

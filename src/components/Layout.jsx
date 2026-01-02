import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-primary text-white font-sans selection:bg-accent selection:text-primary">
            <Navbar />
            <CartDrawer />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NewReleases from './pages/NewReleases';
import Seller from './pages/Seller';
import ProductDetails from './pages/ProductDetails';

import Landing from './pages/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/library" element={<Layout><Home /></Layout>} />
      <Route path="/shop" element={<Layout><Shop /></Layout>} />
      <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
      <Route path="/new-releases" element={<Layout><NewReleases /></Layout>} />
      <Route path="/sell" element={<Layout><Seller /></Layout>} />
    </Routes>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NewReleases from './pages/NewReleases';
import Seller from './pages/Seller';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/sell" element={<Seller />} />
      </Routes>
    </Layout>
  );
}

export default App;

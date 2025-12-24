import React from 'react';
import ProductList from '../components/Productlist.js';
import FilterSection from '../components/FilterSection.js';
import { useProductContext } from '../Context/ProductContext';

const Home = () => {
  const { filteredProducts } = useProductContext();

  return (
    <div className="home-page">
      <div className="container">
        <div className="page-header">
          <h1>Welcome to ShopEase</h1>
          <p>Discover amazing products at great prices</p>
        </div>

        <div className="content-grid">
          <div className="sidebar">
            <FilterSection />
          </div>
          
          <div className="main-content">
            <div className="products-header">
              <h2>Products ({filteredProducts.length})</h2>
            </div>
            
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
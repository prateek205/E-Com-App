import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';
import { useProductContext } from '../Context/ProductContext';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { getCartCount, wishlist } = useCartContext();
  const { searchProducts } = useProductContext();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts(searchTerm);
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>ShopEase</h1>
          </Link>

          <form onSubmit={handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

          <nav className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/categories" className="nav-link">Categories</Link>
          </nav>

          <div className="header-icons">
            <Link to="/wishlist" className="icon-link">
              <FaHeart />
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
            </Link>
            <Link to="/cart" className="icon-link">
              <FaShoppingCart />
              <span className="badge">{getCartCount()}</span>
            </Link>
            <Link to="/account" className="icon-link">
              <FaUser />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
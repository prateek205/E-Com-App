import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';

const Wishlist = () => {
  const { wishlist, moveToCart, removeFromWishlist } = useCartContext();

  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page empty-wishlist">
        <div className="container">
          <div className="empty-state">
            <FaHeart size={64} />
            <h2>Your wishlist is empty</h2>
            <p>Add products to your wishlist</p>
            <Link to="/" className="continue-shopping">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <div className="container">
        <div className="page-header">
          <h1>My Wishlist ({wishlist.length})</h1>
        </div>

        <div className="wishlist-grid">
          {wishlist.map(product => (
            <div key={product.id} className="wishlist-item">
              <div className="wishlist-item-image">
                <img src={product.image} alt={product.name} />
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="remove-wishlist"
                >
                  &times;
                </button>
              </div>
              
              <div className="wishlist-item-details">
                <h4>{product.name}</h4>
                <p className="price">${product.price}</p>
                <p className={`stock ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>

              <div className="wishlist-item-actions">
                <button
                  onClick={() => moveToCart(product)}
                  disabled={!product.inStock}
                  className="move-to-cart"
                >
                  <FaShoppingCart /> Move to Cart
                </button>
                <Link to={`/product/${product.id}`} className="view-details">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart, FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';
import { useProductContext } from '../Context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useProductContext();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCartContext();
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Product not found</h2>
          </div>
        </div>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            
            <div className="rating-category">
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < Math.floor(product.rating) ? 'filled' : ''}
                  />
                ))}
                <span>({product.rating}) | {product.category}</span>
              </div>
            </div>

            <div className="price-section">
              <span className="current-price">${product.price}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="discount">Save {product.discount}%</span>
              )}
            </div>

            <p className="description">{product.description}</p>

            <div className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <select defaultValue="1">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="action-buttons">
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className="add-to-cart-btn"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                
                <button
                  onClick={handleWishlistToggle}
                  className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                >
                  <FaHeart /> {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </button>
              </div>
            </div>

            <div className="product-features">
              <div className="feature">
                <FaTruck />
                <div>
                  <h4>Free Shipping</h4>
                  <p>On orders over $50</p>
                </div>
              </div>
              
              <div className="feature">
                <FaUndo />
                <div>
                  <h4>30-Day Returns</h4>
                  <p>Easy return policy</p>
                </div>
              </div>
              
              <div className="feature">
                <FaShieldAlt />
                <div>
                  <h4>Secure Payment</h4>
                  <p>100% secure transactions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
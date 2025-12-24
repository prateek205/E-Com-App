import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCartContext();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlistToggle}
        >
          <FaHeart />
        </button>
        {!product.inStock && (
          <div className="out-of-stock">Out of Stock</div>
        )}
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.floor(product.rating) ? 'filled' : ''}
            />
          ))}
          <span>({product.rating})</span>
        </div>

        <p className="description">{product.description.slice(0, 60)}...</p>

        <div className="price-section">
          <span className="price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
          <span className="discount">
            {product.discount && `Save ${product.discount}%`}
          </span>
        </div>

        <div className="product-actions">
          <button
            className="add-to-cart"
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
          >
            <FaShoppingCart /> Add to Cart
          </button>
          <Link to={`/product/${product.id}`} className="view-details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
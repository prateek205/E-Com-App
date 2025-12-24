import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaShoppingBag } from 'react-icons/fa';
import CartItem from '../components/CartItem';
import { useCartContext } from '../Context/CartContext';

const Cart = () => {
  const { cart, getCartTotal, clearCart } = useCartContext();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <div className="container">
          <div className="empty-state">
            <FaShoppingBag size={64} />
            <h2>Your cart is empty</h2>
            <p>Add some products to your cart</p>
            <button onClick={() => navigate('/')} className="continue-shopping">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  const shipping = getCartTotal() > 50 ? 0 : 5.99;
  const tax = getCartTotal() * 0.08;
  const total = getCartTotal() + shipping + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="page-header">
          <h1>Shopping Cart</h1>
          <Link to="/" className="back-link">
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            
            <div className="cart-actions">
              <button onClick={clearCart} className="clear-cart-btn">
                Clear Cart
              </button>
            </div>
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-item">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="summary-item">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </div>
            
            <div className="summary-item">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            
            <div className="summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="checkout-btn"
            >
              Proceed to Checkout
            </button>

            <div className="shipping-note">
              <p>Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
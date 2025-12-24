import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShoppingBag } from 'react-icons/fa';

const OrderConfirmation = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="order-confirmation">
      <div className="container">
        <div className="confirmation-content">
          <div className="confirmation-icon">
            <FaCheckCircle size={80} color="#059669" />
          </div>
          
          <h1>Order Confirmed!</h1>
          <p className="order-number">Order #: {orderNumber}</p>
          
          <div className="confirmation-message">
            <p>Thank you for your purchase! Your order has been confirmed.</p>
            <p>You will receive an email confirmation shortly.</p>
          </div>

          <div className="order-details">
            <h3>What's Next?</h3>
            <div className="details-grid">
              <div className="detail-item">
                <div className="detail-number">1</div>
                <div>
                  <h4>Order Processing</h4>
                  <p>We're preparing your order for shipment</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-number">2</div>
                <div>
                  <h4>Shipping</h4>
                  <p>Your order will be shipped within 24 hours</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-number">3</div>
                <div>
                  <h4>Delivery</h4>
                  <p>Expected delivery: 3-5 business days</p>
                </div>
              </div>
            </div>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="continue-shopping">
              <FaShoppingBag /> Continue Shopping
            </Link>
            
            <Link to="/orders" className="view-orders">
              View Order Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
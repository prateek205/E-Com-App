import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { useCartContext } from '../Context/CartContext';

// Load Stripe (use test key for development)
const stripePromise = loadStripe('pk_test_YOUR_STRIPE_PUBLIC_KEY');

const Checkout = () => {
  const { getCartTotal } = useCartContext();
  const total = getCartTotal();

  return (
    <div className="checkout-page">
      <div className="container">
        <div className="page-header">
          <h1>Checkout</h1>
        </div>

        <div className="checkout-content">
          <Elements stripe={stripePromise}>
            <CheckoutForm amount={total} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
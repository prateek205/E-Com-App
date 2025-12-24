import React from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { useCartContext } from '../Context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCartContext();

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p className="category">{item.category}</p>
        <p className="price">${item.price}</p>
        {!item.inStock && (
          <p className="stock-warning">Out of Stock</p>
        )}
      </div>

      <div className="cart-item-quantity">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          <FaMinus />
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          disabled={!item.inStock}
        >
          <FaPlus />
        </button>
      </div>

      <div className="cart-item-total">
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>

      <div className="cart-item-actions">
        <button
          onClick={() => removeFromCart(item.id)}
          className="remove-btn"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart ({cart.length} items)</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={`${item.id}-${index}`} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">
                  ${item.price.toFixed(2)}
                </span>
                <span className="cart-item-message">
                  {item.name} is in your cart.
                </span>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <strong>Total:</strong>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;

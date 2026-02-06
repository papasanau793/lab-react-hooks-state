import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="add-to-cart-btn"
        data-testid={`product-${product.id}`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

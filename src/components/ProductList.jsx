import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ products, addToCart }) => {
  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products available.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

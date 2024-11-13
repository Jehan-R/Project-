import React from 'react';
import './ProductList.css'; // Create this file for styling

const products = [
  { id: 1, name: 'Apple', price: '$1.00' },
  { id: 2, name: 'Banana', price: '$0.50' },
  { id: 3, name: 'Carrot', price: '$0.75' },
  { id: 4, name: 'Milk', price: '$2.00' },
];

const ProductList = () => {
  return (
    <section id="products" className="product-list">
      <h2 className="products-box">Our Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;

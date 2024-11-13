import React from 'react';
import './FeaturedProducts.css'; // Create this file for styling

const featuredProducts = [
  { id: 1, name: 'Biscuits' },
  { id: 2, name: 'Fruits' },
  { id: 3, name: 'Vegetables' },
  { id: 4, name: 'Sweets' },
  { id: 5, name: 'Stationary' },
  { id: 6, name: 'Soft drinks' },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="featured-products">
      <h2>Featured Products</h2>
      <div className="featured">
        {featuredProducts.map(product => (
          <div key={product.id} className="featured-item">
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

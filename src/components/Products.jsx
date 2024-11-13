import React from 'react';
import './FeaturedProducts.css'; // Create this file for styling

const featuredProducts = [
  { id: 1, name: 'Biscuits' },
  { id: 2, name: 'Organic Apple' },
  { id: 3, name: 'Fresh juices' },
  { id: 4, name: 'Pastries' },
  { id: 5, name: 'Nuts and seeds' },
  { id: 6, name: 'Vegetables' },
];

const FeaturedProducts = () => {
  return (
    <section id="featured" className="featured-products">
      <h2>Products</h2>
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

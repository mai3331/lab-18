import React from 'react';
import { Link } from 'react-router-dom';
const Products = ({ products = [] }) => {
  return (
    <div>
      {products.map(product => (
        product && (
          <div key={product.product_id} className="card shadow-lg" style={{ width: '18rem' }}>
            {product.image && (
              <img 
                src={product.image} 
                alt={product.product_name} 
                className="card-img-top" 
              />
            )}
            <div className="card-body ">
              <h2 className="card-title">{product.product_name}</h2>
              <p className="card-text">{product.product_desc}</p>
              <Link 
                to={`/products/${product.product_id}`} 
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default Products;

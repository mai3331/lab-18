import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ productsList }) => {
  const { id } = useParams();
  const product = productsList.find((p) => p.product_id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.product_name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.product_name}</h2>
          <p>{product.product_desc}</p>
          <h4>Price: ${product.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default Details;

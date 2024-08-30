import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Products = () => {
const products=useLoaderData();
  return (
    <>
  <div className="card-group mt-5">
    <div className="row m-auto">
  {products &&
    products.map((product) => (
      <div key={product.id} className="col-md-4 mb-3">
        <div className="card shadow mx-3 text center ">
        <img 
          src={product.image} 
          className="card-img-top" 
          alt={product.product_name} 
          style={{ width: '200px', height: '180px', margin: 'auto' }} 
        />
        <div className="card-body text-center">
          <h5 className="card-title">{product.product_name}</h5>
          <p className="card-text">Price: {product.price}</p>
          <Link 
            to={`/products/${product.id}`} 
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              border: '1px solid lightgray',
              backgroundColor: '#3EECAC',
              backgroundImage: 'linear-gradient(19deg, #3EECAC 0%, #EE74E1 100%)'
              
            }}
          >
            Details
          </Link>
        </div>
        </div>
      </div>
    ))}
    </div>
</div>


    </>
  );
};
export const ProductsLoader = async () => {
  const res = await fetch('http://localhost:7000/products')

  if (!res.ok) {
    throw Error('Could not fetch products')
  }

  return res.json()
}

export default Products;

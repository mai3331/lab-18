import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [product_name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [product_desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { product_name, price, product_desc, image };

    fetch("http://localhost:7000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => history("/"));
  };
  return (
    <>
      <form
        className="container mt-4"
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#c9e4ca",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            product name
          </label>
          <div className="input-group">
            <input
              required
              value={product_name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="name"
              aria-label="name"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="mb-3">
          <label
            htmlFor="basic-url"
            className="form-label"
            style={{ fontWeight: "200px" }}
          >
            Product price
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
            <span className="input-group-text">.00</span>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            Product description
          </label>
          <div className="input-group">
            <span className="input-group-text">description</span>
            <textarea
              value={product_desc}
              required
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              aria-label="With textarea"
            ></textarea>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="basic-url" className="form-label">
            product image
          </label>
          <div class="input-group">
            <input
              type="file"
              required
              className="form-control"
              id="inputGroupFile01"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <button
          className="btn"
          style={{
            backgroundColor: "#183a37", 
            borderColor: "#183a37",
            color: "#ffffff", 
          }}
        >
          Add Blog
        </button>
      </form>
    </>
  );
};
export default Create;

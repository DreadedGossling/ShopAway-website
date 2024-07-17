import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/p.css'

function ProductLayout() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="product-list-page">
        <h1>Product List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="product-list1">
            {products.map(product => (
              <li key={product.id} className="product-list2">
                <Link to={`/product/${product.id}`}>
                  <img src={product.thumbnail} alt={product.name} />
                  <h2>{product.name}</h2>
                  <p>Price: ₹{Math.floor(product.price * 80)}</p>
                  <p>Rating: {product.rating} / 5</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ProductLayout;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const filtered = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>All Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="product-grid">
        {filtered.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>
            <span>⭐ {product.rating.rate}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

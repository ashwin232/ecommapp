import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <h4>${product.price}</h4>
      <p>{product.description}</p>
      <p>Rating: ⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
      <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetail;

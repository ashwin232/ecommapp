import React, { useContext } from 'react';
import CartContext from '../context/CartContext';

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  const updateQuantity = (id, quantity) => {
    const qty = Math.max(Number(quantity), 1); // Prevent 0 or negative
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: qty } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, e.target.value)}
                />
                <br />
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';

function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">MiniShop</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;

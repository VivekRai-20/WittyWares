import React, {useContext} from 'react';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css'; // Import the CSS file
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">🌐WittyWares💃🏻</Link> {/* Use Link for the logo */}
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button type="submit">Search</button>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Shop</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/mens">Mens</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/women">Women</Link> {/* Use Link for navigation */}
        </li>
        <li>
          <Link to="/kids">Kids</Link> {/* Use Link for navigation */}
        </li>
      </ul>
      <div className="navbar-actions">
        <Link to="/login"> {/* Use Link for the login button */}
          <button className="login-button">Login</button>
        </Link>
        <div className="navbar-cart">
          <Link to="/cart"> {/* Use Link for the cart icon */}
            <span role="img" aria-label="cart">🛒</span>
            <span className="cart-count">{getTotalCartItems()}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
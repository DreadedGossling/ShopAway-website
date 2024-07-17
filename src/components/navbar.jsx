import React from 'react';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = (prop) => {
  const navigate = useNavigate();
  const { setIsHome, isHome, cartItem, alert } = { ...prop }

  const logout = () => {
    localStorage.setItem('login credentials', null)
    navigate('/login')
  }
  return (
    <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1' }}>

      <div style={{ display: 'flex', justifyContent: 'center' }} className='alert-text'>
        <p style={{ position: 'absolute' }}>{alert}</p>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link className='link' to={'/'}>
            <img src="/shop@way.png" alt="shop@way" height={80} />
          </Link>
        </div>
        <ul className="navbar-links">
          {!isHome && <li>
            <button onClick={() => setIsHome(true)}>Products</button>
          </li>}
          <li style={{ marginTop: '' }}>
            <button onClick={() => setIsHome(false)}
              style={{ display: 'flex' }}>
              Cart
              <p className='cart-size'>{cartItem.length}</p>
            </button>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";

const Navbar = (prop) => {
  const navigate = useNavigate();
  const { setIsHome, isHome, cartItem, alert } = { ...prop }

  const loggedInUser = JSON.parse(localStorage.getItem('login credentials'))

  const logout = () => {
    localStorage.removeItem('login credentials')
    navigate('/login')
  }

  return (
    <div style={{ position: 'fixed', width: '100%', top: '0', zIndex: '1' }}>

      <div style={{ display: 'flex', justifyContent: 'center' }} className='alert-text'>
        <p style={{ position: 'absolute' }}>{alert}</p>
      </div>
      <nav className="flex h-20 justify-between text-center bg-sky-500 p-4 text-white" >
        <h1 className='text-2xl bg-sky-600 rounded-full px-3 py-2 shadow-lg shadow-amber-200 '>Shop@way</h1>

        <h1 className='mt-5 text-lg font-light italic underline'>Hi, {loggedInUser.firstName}  {loggedInUser.lastName}</h1>

        <ul className="flex space-x-6 transition-all">

          {!isHome &&
            <li>
              <button onClick={() => setIsHome(true)}
                className='text-md font-semibold border-b-2 border-white p-2 mt-1 rounded-2xl hover:bg-sky-600 hover:ease-in-out duration-300 w-32 bg-sky-500'>
                Products</button>
            </li>
          }

          {isHome &&
            <li onClick={() => setIsHome(false)}
              className='text-md font-semibold border-b-2 border-white p-2 mt-1 rounded-2xl hover:bg-sky-600 hover:ease-in-out duration-300 w-14 bg-sky-500'>
              <button>
                <BsCart4 className='text-3xl' />
              </button>
              <h3 className='text-white text-sm -mt-10 ml-9'>{cartItem && cartItem.length}</h3>

            </li>
          }

          <li className='text-md font-semibold border-b-2 border-white p-2 mt-1 rounded-2xl hover:bg-sky-600 hover:ease-in-out duration-300 w-32 bg-sky-500'>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
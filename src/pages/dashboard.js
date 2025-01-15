import React, { useEffect, useState } from 'react'
import ProductComp from '../components/product';
import Navbar from '../components/navbar';
import Cart from '../components/cart';

const HomePage = () => {
  const userLoggedIn = JSON.parse(localStorage.getItem('login credentials'));
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isHome, setIsHome] = useState(true)
  const [cartItem, setCartItem] = useState([])
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState()

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then((data) => {
        setProducts(data.products)
        setLoading(false);
      });

    const cartProduct = JSON.parse(localStorage.getItem(userLoggedIn.email))
    setCartItem(cartProduct)
  }, [])

  const selectPageHandler = (i) => {
    if (i >= 1 && i <= products.length / 10 && i !== page)
      setPage(i)
  }

  return (
    <>
      <Navbar
        alert={alert}
        isHome={isHome}
        setIsHome={setIsHome}
        cartItem={cartItem}
      />

      {loading ?
        <div className="loading-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
        :
        <div>
          {isHome ?
            <div>
              {products &&
                <div className=' max-w-[100%] mx-20 mt-36 mb-8 p-2 border-slate-400 border-1 shadow-md rounded-lg shadow-black bg-[#f9f9f9]'>
                  <h1 className='text-center text-2xl font-serif font-semibold text-emerald-800 border-t-2 border-b-2 border-slate-300 rounded-lg p-1.5 bg-gradient-to-b from-[#DEF4F9] to-[#F7EEF7]'>Products</h1>

                  <div className='flex justify-center mt-2' >
                    <ul className='flex flex-wrap justify-center p-4'>
                      {products && products.slice(page * 10 - 10, page * 10).map((product, i) => {
                        return (
                          <ProductComp
                            userData={userLoggedIn}
                            product={product}
                            key={i}
                            cartItem={cartItem}
                            setCartItem={setCartItem}
                            alert={alert}
                            setAlert={setAlert}
                          />
                        )
                      })}
                    </ul>
                  </div>
                  <div className="p-3 m-4 flex justify-center">
                    <span onClick={() => selectPageHandler(page - 1)}
                      className="px-5 py-4 cursor-pointer border-black border-2"
                      style={{ visibility: page === 1 ? 'hidden' : '' }}>◀</span>
                    {
                      [...Array(products.length / 10)].map((_, i) => {
                        return <span
                          key={i}
                          style={{ backgroundColor: page === i + 1 ? 'rgb(208, 244, 251)' : '' }}
                          className="px-5 py-4 cursor-pointer border-black border-2"
                          onClick={() => selectPageHandler(i + 1)}>
                          {i + 1}
                        </span>
                      })
                    }
                    <span onClick={() => selectPageHandler(page + 1)}
                      className="px-5 py-4 cursor-pointer border-black border-2"
                      style={{ visibility: page === products.length / 10 ? 'hidden' : '' }}>▶</span>
                  </div >
                </div>
              }
            </div >
            :
            <Cart cartItem={cartItem} setCartItem={setCartItem} setAlert={setAlert} />
          }
        </div>
      }
    </>
  )

}

export default HomePage

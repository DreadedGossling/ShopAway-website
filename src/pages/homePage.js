import React, { createContext, useEffect, useState } from 'react'
import ProductComp from '../components/product';
import Navbar from '../components/navbar';
import Cart from '../components/cart';
import '../styles/product.css'

const HomePage = () => {
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
    // checking login or not
    const data = JSON.parse(localStorage.getItem('login credentials'))
    console.log("data", data)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartItem"))
    console.log("object", data)
    setCartItem(data)
  }, [])

  const selectPageHandler = (i) => {
    if (i >= 1 && i <= products.length / 10 && i !== page)
      setPage(i)
  }

  return (
    <>
      <Navbar isHome={isHome} setIsHome={setIsHome} cartItem={cartItem} alert={alert} />

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
                <div className='product-list-page'>

                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px' }}>
                    <ul className='product-list'>
                      {products && products.slice(page * 10 - 10, page * 10).map((product, i) => {
                        return (
                          <ProductComp
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
                  <div className="pagination">
                    <span onClick={() => selectPageHandler(page - 1)}
                      style={{ visibility: page == 1 ? 'hidden' : '' }}>◀</span>
                    {
                      [...Array(products.length / 10)].map((_, i) => {
                        return <span
                          key={i}
                          className={page === i + 1 ? "pagination-selected" : ""}
                          onClick={() => selectPageHandler(i + 1)}>
                          {i + 1}
                        </span>
                      })
                    }
                    <span onClick={() => selectPageHandler(page + 1)}
                      style={{ visibility: page == products.length / 10 ? 'hidden' : '' }}>▶</span>
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

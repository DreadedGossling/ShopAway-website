import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const InfiniteScroll = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(1)
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit * 10}`
    );
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [limit]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setLimit(limit => limit + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);


  return (
    <div style={{ marginTop: '0px', backgroundColor: 'white', position: 'relative' }}>
      <div>
        <Link to={'/'} className='underline text-blue-900 text-xl mx-1'>Dashboard</Link>/
        <Link to={'/infiniteScroll'} className='underline text-blue-900 text-xl mx-1'>Infinite-Scroll</Link>
      </div>


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((item, idx) => {
          return (
            <div key={idx}>
              <div style={{
                width: '250px',
                height: '500px', padding: '10px',
                border: '1px black solid', margin: '10px',
                borderRadius: '20px'
              }}>
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  height={200}
                  width={250} />
                <p>{item.description.substr(0, 150)}...</p>
                <h2>{item.title}</h2>
                <div>
                  <Link
                    to={`/product/${item.id}`}
                    style={{
                      color: 'blue', display: 'flex', justifyContent: 'center',
                      textDecoration: 'underline', marginTop: '20px'
                    }}
                  >View</Link>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>

      {loading &&
        <div className="loading-container">
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>}

    </div>
  )
}

export default InfiniteScroll

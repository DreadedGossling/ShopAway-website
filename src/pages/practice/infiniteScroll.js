import React, { useState, useEffect } from 'react'
import '../../styles/p.css'

const InfiniteScroll = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(1)
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit * 10}`
    );
    const data = await res.json();
    console.log(data.products);
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [limit]);

  const handelInfiniteScroll = async () => {
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
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);


  return (
    <div style={{ marginTop: '0px', backgroundColor: 'white', position: 'relative' }}>
      InfiniteScroll


      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((item, idx) => {
          return (
            <div key={idx}>
              <div style={{
                width: '250px',
                height: '400px', padding: '10px',
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

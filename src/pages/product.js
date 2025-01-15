import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const Product = () => {
  const [item, setItem] = useState()
  const params = useParams();

  const getCardData = async () => {
    const res = await fetch(`https://dummyjson.com/products/${params.id}`);
    const product = await res.json();
    console.log(product);
    setItem(product);
  };

  useEffect(() => {
    getCardData()
  }, [])


  return (
    <>
      <div>
        <Link to={'/'} className='underline text-blue-900 text-xl mx-1'>Dashboard</Link>/
        <Link to={'/infiniteScroll'} className='underline text-blue-900 text-xl mx-1'>Infinite-Scroll</Link>/
        <Link to={`/product/${params.id}`} className='underline text-blue-900 text-xl mx-1'>Product-{params.id}</Link>
      </div>
      {item &&
        <div className='flex justify-center'>
          <div className='w-[90%] lg:w-[60%] mt-24 outline-double outline-2 outline-orange-600 rounded-lg p-4'>

            <h1 className=' font-serif text-center text-xl font-bold text-violet-800'>{item.title}</h1>
            <div className='bg-cyan-100 flex justify-center'>
              <img src={item.thumbnail} alt={item.title} />
            </div>

            <div className='flex justify-between mt-2'>

              <div className='flex text-2xl text-yellow-400 text-center'>
                {new Array(Math.round(item.rating)).fill(0).map((_, i) => {
                  return <div key={i} >&#9733; </div>
                })}
                <h5 className='text-[16px] m-1 underline text-slate-700'>{item.rating} Ratings</h5>
              </div>
              <span className='text-green-600'>({item.reviews.length} Reviews)</span>
            </div>

            <div>
              <span className='font-bold text-lg'>Product Description:</span>
              <p className=' text-justify text-sm mb-2'>{item.description}</p>
            </div>

            <div className='flex justify-between my-2'>
              <div>
                <span className='font-bold text-lg'>Price: </span>
                <span className='font-light text-gray-700'>Rs. {Math.floor(item.price * 80)} /-</span>
              </div>
              <div>
                <span className='font-bold text-lg'>Category: </span>
                <span className='font-light text-gray-700 capitalize'>{item.category}</span>
              </div>
            </div>

            <div className='flex justify-between my-2'>
              <div>
                <span className='font-bold text-lg'>Product Id: </span>
                <span className='font-light text-gray-700'>{item.sku}</span>
              </div>
              <div>
                <span className='font-bold text-lg'>Brand: </span>
                <span className='font-light text-gray-700 capitalize'>{item.brand}</span>
              </div>
            </div>

            <div className='flex justify-between my-2'>
              <div>
                <span className='font-bold text-lg'>Return Policy: </span>
                <span className='font-light text-gray-700'>{item.returnPolicy}</span>
              </div>
              <div>
                <span className='font-bold text-lg'>Availability: </span>
                {item.availabilityStatus === "In Stock" ?
                  < span className='font-light text-green-600 capitalize'>{item.availabilityStatus}</span> :
                  <span className='font-light text-red-600 capitalize'>{item.availabilityStatus}</span>
                }
              </div>
            </div>

            <p className='text-red-600 text-[12px]'>**Comes with {item.warrantyInformation}**</p>

          </div>
        </div>
      }
    </>
  )
}

export default Product

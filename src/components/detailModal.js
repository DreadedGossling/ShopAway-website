import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ onClose, detail, handleBuy, cartItem }) => {

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <div >

          <h1 className=' font-serif text-center text-xl font-bold text-violet-800'>{detail.title}</h1>
          <div className='bg-cyan-100 flex justify-center'>
            <img src={detail.thumbnail} alt={detail.title} />
          </div>

          <div className='flex justify-between mt-2'>

            <div className='flex text-2xl text-yellow-400 text-center'>
              {new Array(Math.round(detail.rating)).fill(0).map((_, i) => {
                return <div key={i} >&#9733; </div>
              })}
              <h5 className='text-[16px] m-1 underline text-slate-700'>{detail.rating} Ratings</h5>
            </div>
            <span className='text-green-600'>({detail.reviews.length} Reviews)</span>
          </div>

          <div>
            <span className='font-bold text-lg'>Product Description:</span>
            <p className=' text-justify text-sm mb-2'>{detail.description}</p>
          </div>

          <div className='flex justify-between my-2'>
            <div>
              <span className='font-bold text-lg'>Price: </span>
              <span className='font-light text-gray-700'>Rs. {Math.floor(detail.price * 80)} /-</span>
            </div>
            <div>
              <span className='font-bold text-lg'>Category: </span>
              <span className='font-light text-gray-700 capitalize'>{detail.category}</span>
            </div>
          </div>

          <div className='flex justify-between my-2'>
            <div>
              <span className='font-bold text-lg'>Product Id: </span>
              <span className='font-light text-gray-700'>{detail.sku}</span>
            </div>
            <div>
              <span className='font-bold text-lg'>Brand: </span>
              <span className='font-light text-gray-700 capitalize'>{detail.brand}</span>
            </div>
          </div>

          <div className='flex justify-between my-2'>
            <div>
              <span className='font-bold text-lg'>Return Policy: </span>
              <span className='font-light text-gray-700'>{detail.returnPolicy}</span>
            </div>
            <div>
              <span className='font-bold text-lg'>Availability: </span>
              {detail.availabilityStatus === "In Stock" ?
                < span className='font-light text-green-600 capitalize'>{detail.availabilityStatus}</span> :
                <span className='font-light text-red-600 capitalize'>{detail.availabilityStatus}</span>
              }
            </div>
          </div>

          <p className='text-red-600 text-[12px]'>**Comes with {detail.warrantyInformation}**</p>

          <div className="flex justify-center">
            <button
              className='my-2 bg-green-500 text-white w-44 h-10 rounded-md cursor-pointer font-medium hover:bg-green-600'
              onClick={() => handleBuy(detail)}>
              Buy
            </button>
          </div>



        </div>

        <button
          className='absolute bg-gray-300 rounded-full text-black text-2xl cursor-pointer top-2 right-2'
          onClick={onClose}>
          <IoCloseSharp />
        </button>

      </div>
    </div >
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    background: "linear-gradient(white, lightcyan)",
    padding: '25px',
    borderRadius: '8px',
    position: 'relative',
    width: '80%',
    maxWidth: '550px',
    height: 'fit-content'
  },
};

export default Modal;

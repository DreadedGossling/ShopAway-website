import React, { useState } from 'react'
import '../styles/detailModal.css'

const DetailModal = ({ detail, setShowModal }) => {

  return (
    <div onClick={e => { e.stopPropagation(); }}>
      <div className="detail-container">
        <div className="detail-contant">
          <button className="close" onClick={() => setShowModal(false)}>
            X
          </button>

          {detail.map((item, index) => (
            <div className="detail-info" key={index}>
              <div className="img-card">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="product-detail">
                <h2 className="modal-title">{item.title}</h2>
                <h3 className="modal-price">£ {item.price}</h3>
                <p className="modal-desc">{item.description}</p>
                <button>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DetailModal

import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const params = useParams()

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  // src/productData.js
  const product = {
    id: 1,
    name: "Sample Product",
    image: "https://via.placeholder.com/150",
    price: 49.99,
    description: "This is a sample product description.",
    details: [
      "Detail 1: Lorem ipsum dolor sit amet.",
      "Detail 2: Consectetur adipiscing elit.",
      "Detail 3: Integer molestie lorem at massa."
    ]
  };


  return (
    // <div>
    //   Product Id Is : {params.id}

    <div className="product-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        <ul className="product-specs">
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
    // </div>
  )
}

export default User

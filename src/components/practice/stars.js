import React, { useState } from 'react'
import '../../styles/p.css'

const Stars = ({ stars }) => {
  const [starValue, setStarValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {new Array(stars).fill(0).map((item, i) => {
        return <div key={i}
          style={{ color: (hoverValue == 0 && starValue > i || i < hoverValue ? 'gold' : ''), fontSize: '25px' }}
          onClick={() => setStarValue(i + 1)}
          onMouseEnter={() => setHoverValue(i + 1)}
          onMouseLeave={() => setHoverValue(0)}
        >
          &#9733;
        </div>
      })}
      <span style={{ margin: '7px' }}>Rating : {hoverValue || starValue}</span>

    </div>
  )
}

export default Stars
import React, { useState, useEffect } from 'react'
import '../../styles/p.css'

const Prog = () => {
  const [bar, setBar] = useState(0);

  const handleBar = () => {
    const time = 100
    if (bar >= 100) return
    for (let i = 0; i <= time; i++) {
      setTimeout(() => {
        setBar(i)
      }, i * 50)
    }
  }
  console.log('bar', bar)

  useEffect(() => {
    handleBar()
  }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBar((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval)
  //       }
  //       return Math.min(prev + 5, 100)
  //     })
  //   }, 200);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <div className='parent'>
        <div className='child'
          style={{
            width: `${bar}%`
            // transform: `translateX(${bar - 100}%)` 
          }}
        ></div>
      </div>
    </div>
  )
}

export default Prog

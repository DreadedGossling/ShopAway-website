import React, { useState } from 'react'

const Qa = (prop) => {
  const { question, answer } = { ...prop }
  const [show, setShow] = useState(false)

  return (
    <>
      <div style={{  border: '1px black solid',textTransform:'capitalize', width: '800px', margin:'10px',padding:'5px'}}>
        <div style={{ display: 'flex', justifyContent:'space-between' }}>
          <h2>{question}</h2>
          <p style={{ cursor: 'pointer' }}
            onClick={() => setShow(!show)}>
            {!show ? '+' : '-'}
          </p>
        </div>
        {show &&
          <h3>{answer}</h3>}
      </div>
    </>
  )
}

export default Qa

import React from 'react'
import data from '../../content/qna.json';
import Qa from '../../components/practice/qa';

const Faq = () => {

  return (
    <>
      <div>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>FAQ</h1>
        <div >
          {data.map((item, index) => {
            return (
              <div className='faq-item' key={index}>
                <Qa question={item.question} answer={item.answer} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Faq

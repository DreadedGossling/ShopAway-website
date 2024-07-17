import React, { useEffect, useState } from 'react'
import data from '../../content/qna.json';
import Qa from '../../components/practice/qa';

const Faq = () => {

  // const [qna, setQna] = useState(data)

  const [datas, setDatas] = useState([])
  const [searchText, setSearchText] = useState('')
  const [searchedItem, setSearchedItem] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products`).then((res) =>
      res.json()).then(data => setDatas(data.products))
  }, [])

  const handleSearch = (e) => {
    console.log("object", e.target.value)
    setSearchText(e.target.value)
    const filteredData = datas.filter((item) => {
      return item.title.toLowerCase().includes(searchText.toLowerCase())
    })
    setSearchedItem(filteredData)
  }

  // const [circle, setCircle] = useState();
  // const [circleList, setCircleList] = useState([]);
  // const [active, setActive] = useState(null);

  // const getCircle = () => {
  //   setCircle('')
  //   setCircleList([...circleList, circle])
  // }

  // const handleBackground = (id) => {
  //   setActive(id)
  // }

  return (
    <>
      <div>
        {/* <h1 style={{ display: 'flex', justifyContent: 'center' }}>FAQ</h1>
        <div >
          {qna.map((item, index) => {
            return (
              <div className='faq-item' key={index}>

                <Qa question={item.question} answer={item.answer} />

              </div>
            )
          })}
        </div>
      </div>
      <div> */}


        {/* <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          <button onClick={getCircle}>Circle</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
          {circleList.map((_, index) => {
            return (
              <div style={{ width: '50px', height: '50px', backgroundColor: index === active ? 'red' : 'gray', borderRadius: '50%', margin: '10px' }}
                key={index}
                onClick={() => handleBackground(index)}>
              </div>
            )
          })
          }
        </div>

        {circleList.length >= 1 &&
          <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
            <button onClick={() => setCircleList([])}>Reset</button>
          </div>
        } */}

        <div>
          <h1 style={{ display: 'flex', justifyContent: 'center' }}>Searched List</h1>

          <div style={{ textAlign: 'center' }}>
            <input type="text" name="text"
              style={{ width: '400px' }}
              value={searchText}
              onChange={handleSearch} />
          </div>

          {/* {data[0].title} */}

          {searchedItem.length > 0 &&
            <table>
              <tr>
                <th>S No.</th>
                <th>Item</th>
              </tr>

              {searchedItem.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td> {item.id}</td>
                    <td className='px-2'> {item.title}</td>
                  </tr>
                )
              })}
            </table>
          }

        </div>

      </div>
    </>
  )
}

export default Faq

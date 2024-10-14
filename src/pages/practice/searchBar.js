import React, { useState, useEffect } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState();
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const productList = await response.json()
      setData(productList.products)
    } catch (error) {
      console.log("error", error)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])

  const handlechange = (e) => {
    if (!e.target.value) {
      setResult()
    }
    setSearch(e.target.value)
    const find = data.filter((item) => item.title.toLowerCase().includes(search))
    setResult(find)
  }

  return (
    <>
      <p>Search Bar</p>
      <input
        type="text"
        style={{ width: '400px' }}
        placeholder="search here..."
        onChange={(e) => handlechange(e)}
        value={search} />
      {result &&
        <ul style={{ margin: '15px' }}>
          {result.map((item, i) => {
            return (
              <li key={i} style={{ display: 'flex' }}>
                <p style={{ marginRight: '15px' }}><span>{item.title}</span></p>
              </li>
            )
          })}
        </ul>
      }
    </>
  )
}

export default SearchBar
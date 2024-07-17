import React, { useState, useEffect } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState();

  const data = [
    { 'name': 'ravi', 'email': 'ravi@gmail.com' },
    { 'name': 'navi', 'email': 'navi@gmail.com' }
  ]

  const handlechange = (e) => {
    console.log("object", e.target.value)
    if (!e.target.value) {
      console.log("no")
      setResult(null)
    }
    setSearch(e.target.value)
    const find = data.filter((item) => item.name.includes(search))
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
      {result ?
        <ul style={{ margin: '15px' }}>
          {result.map((item, i) => {
            return (
              <li key={i} style={{ display: 'flex' }}>
                <p style={{ marginRight: '15px' }}>Name: <span>{item.name}</span></p>
                <p>Email: <span>{item.email}</span></p>
              </li>
            )
          })}
        </ul>
        :
        <div style={{ margin: '15px', color: 'red' }}>
          no result found</div>
      }
    </>
  )
}

export default SearchBar
import React from 'react'
import Product from './Product'

function Home() {
  const arr = [1, 3 , 4 ,7]
  return (
    <div>
      {
        arr.map(i=>
          (
            <Product value={i}/>
          )
          )
      }
    </div>
  )
}

export default Home
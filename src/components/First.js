import React, { Fragment } from 'react'

function First(props) {
  const a = 10; 

  const {name , lastname} = props
  return (
    <Fragment>
        <h1> Hey {name} {lastname}</h1>
        <div>First {a}</div>
    </Fragment>
    
  )
}

export default First
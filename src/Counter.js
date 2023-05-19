import React from 'react'

function Counter(props) {
  const {name,count} = props

  return (
    <div>
    <h1>Name : {name} , Count: {count}</h1>
    </div>
  )
}

export default Counter
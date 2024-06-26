import React from 'react'

function Example(props) {

  console.log(props);

  return (
    <>
      
      <div>Example</div>
      <p>data shared is: {props.sub}</p>

    </>
  )
}

export default Example
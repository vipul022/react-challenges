import React from "react"

const HappyMessage = (props) => {
  console.log('props=>  ',props)
  return <p>{props.message}</p>
  // return <h1>hello</h1>
}

export default HappyMessage
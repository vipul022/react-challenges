import React from "react"

const RenderInputFields  = ({noOfInputFields}) => {
  console.log(noOfInputFields)
    let inputFields = []
    for (let i=0; i<=noOfInputFields; i++){
      inputFields.push(
        <div>
          <input  type = "text"  key={i}  name="text"/> 
          <button  type='submit'>Submit</button> 
        </div>
      )
    }

  return (
    <div>
      {inputFields}
    </div>
  )
 
}
export default RenderInputFields 
// const listMovies = movies.map((movie, index) => 

// <div style = {styling.style}>
// <li key={index}>{movie}</li>
// </div>

// )
{/* <div>
    <input  type = "text"  key={index}  name="text"/> 
    <button  type='submit'>Submit</button> 
  </div> */}
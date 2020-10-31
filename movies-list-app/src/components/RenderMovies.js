import React from "react"
import * as styling from './style.js'

  
const RenderMovies = ({movies}) => {
console.log(movies)
// const {movies} = props.movies

const listMovies = movies.map((movie, index) => 

<div style = {styling.style}>
<li key={index}>{movie}</li>
</div>

)

return (
  <div>
    <ul>
      {listMovies}
    </ul>
  </div>
)



}
export default RenderMovies
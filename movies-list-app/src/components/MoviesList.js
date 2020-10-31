import React from "react"
import RenderMovies from "./RenderMovies"
class MoviesList extends React.Component {
  constructor(props){
  super(props)
  this.state = {movies: ["Titanic"]}
  }
  


 
  handleClick = (event) => {
    console.log('hello!')
    event.preventDefault()
    console.log('world')
      console.log('event.target.elements=> ',event.target.elements.movieText.value)
      console.log(this.state.movies)
//!cloning the array
      const movieClone = [...this.state.movies]
      // console.log("movieClone=>", movieClone)
      
       let movie = event.target.elements.movieText.value

      movie && movieClone.push(movie)
     
      this.setState({movies: movieClone})
      // console.log(event.target.value)
      event.target.elements.movieText.value = ""
      
      
  }
  render(){
    // console.log("in render=>", this.state.movies)
    const movies = this.state.movies
    console.log(movies)

    return(
      <div>
        <form onSubmit={this.handleClick}  >
          <label>Movie Name:
            <input type="text" name='movieText'  />
          </label>
       
          <button type='submit'>Submit</button>
        </form>
         <RenderMovies movies={movies} />
         </div>
          
    )
  }
}

export default MoviesList
